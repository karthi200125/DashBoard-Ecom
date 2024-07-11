'use client';
import CustomBtn from '@/app/_components/CustomBtn';
import CustomSelect from '@/app/_components/CustomSelect';
import CustomInput from '@/app/_components/Input';
import { cities, states } from '@/app/_components/dummydata';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';
import useEditProfileModal from '@/app/hooks/useEditProfileModel';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition, useCallback, useMemo, memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import EditProfileImgUpload from '../../(pages)/profile/EditProfileImgUpload';
import { updateUser } from '../../../../actions/users';
import { UserSchema } from '../../../../schemas';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const EditProfile = () => {
    const user: any = useCurrentUser();
    const [isLoading, startTransition] = useTransition();
    const editProfileModal = useEditProfileModal();
    const router = useRouter();
    const queryClient = useQueryClient();
    const [profileImg, setProfileImg] = useState('');
    const { update } = useSession()

    const defaultValues = useMemo(() => ({
        email: user?.email || '',
        name: user?.name || '',
        address: user?.address || '',
        city: user?.city || '',
        state: user?.state || '',
        phoneNo: user?.phoneNo || '',
        postalCode: user?.postalCode || ''
    }), [user]);

    const methods = useForm<z.infer<typeof UserSchema>>({
        resolver: zodResolver(UserSchema),
        defaultValues
    });

    const handleSubmit = useCallback((values: z.infer<typeof UserSchema>) => {
        const data = {
            ...values,
            id: user?.id,
            image: profileImg || user?.image
        };

        startTransition(() => {
            updateUser(data)
                .then((data) => {
                    if (data.success) {
                        toast.success(data.success);
                        update()
                        router.refresh();
                        editProfileModal.onClose();
                        queryClient.invalidateQueries({ queryKey: ['profileuser'] });
                        queryClient.invalidateQueries({ queryKey: ['favproducts'] });
                    } else if (data.error) {
                        toast.error(data.error);
                    }
                });
        });
    }, [profileImg, user, editProfileModal, router, queryClient]);

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
                <div className='w-full p-2 md:p-5 overflow-y-auto'>
                    <div className='py-2 border-b'>
                        <h4>Edit Profile</h4>
                        <p>Here you can edit public information about yourself</p>
                    </div>
                    <div className='flex flex-col xl:flex-row gap-5 justify-between overflow-y-auto'>
                        <div className='w-full xl:w-[300px] flex flex-col md:flex-row xl:flex-col gap-3 py-3'>
                            <EditProfileImgUpload user={user} onDownloadUrl={(d: any) => setProfileImg(d)} />
                            <CustomBtn arrow btnCls='w-full border bg-black text-white' arrowCls='bg-white text-black' isLoading={isLoading} onClick={methods.handleSubmit(handleSubmit)}>Update Profile</CustomBtn>
                        </div>
                        <div className='w-full md:w-[650px] flex flex-wrap gap-5 justify-between overflow-y-auto py-3'>
                            <CustomInput name='name' inputCls='flex-1' label='User Name' type='text' isLoading={isLoading} />
                            <CustomInput name='email' inputCls='flex-1' label='Email' type='email' isLoading={isLoading} />
                            <CustomInput name='phoneNo' inputCls='flex-1' label='Mobile Number' type='number' isLoading={isLoading} />
                            <CustomInput name='address' inputCls='flex-1' label='Permanent Address' type='text' isLoading={isLoading} />
                            <CustomInput name='postalCode' inputCls='flex-1' label='Postal Code' type='number' isLoading={isLoading} />
                            <div className='flex flex-col md:flex-row items-center gap-5 w-full'>
                                <CustomSelect
                                    name="city"
                                    control={methods.control}
                                    defaultValue={methods.getValues("city")}
                                    options={cities}
                                    label="Select City"
                                    selectCls="w-full"
                                />
                                <CustomSelect
                                    name="state"
                                    control={methods.control}
                                    defaultValue={methods.getValues("state")}
                                    options={states}
                                    label="Select State"
                                    selectCls="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

const EditProfileModel = () => {
    const editProfileModal = useEditProfileModal();
    return (
        <Modal
            closeBtn=''
            isOpen={editProfileModal.isOpen}
            toggleOpen={editProfileModal.onClose}
            modalBody={<EditProfile />}
            modalCls='w-full xl:w-[1000px]'
        />
    );
};

export default memo(EditProfileModel);
