'use client';

import CustomBtn from "@/app/_components/CustomBtn";
import Spinners from "@/app/_components/Spinners";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { newVeriication } from "../../../../actions/authentication/new-verification";

const NewVerification = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [success, setSuccess] = useState<string | undefined>("");
    const [error, setError] = useState<string | undefined>("");
    const router = useRouter()

    const onSubmit = useCallback(() => {
        if (success || error) return;
        if (!token) {
            toast.error("Missing token");
            return;
        }
        newVeriication(token)
            .then((data) => {
                if (data.success) {
                    toast.success(data.success);
                    setSuccess(data.success);
                } else if (data.error) {
                    toast.error(data.error);
                    setError(data.error);
                }
            })
            .catch(() => {
                toast.error("Something went wrong");
                setError("Something went wrong");
            });
    }, [token, success, error]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="border rounded-[20px] p-10 flex flex-col gap-5 items-center justify-center w-[400px]">
                <h1>Auth</h1>
                <p>Confirming your verification</p>
                {!success && !error && (<Spinners />)}
                <CustomBtn arrow btnCls="arrow pl-5 border" onClick={() => router.push('/')}>
                    Back to Home
                </CustomBtn>
            </div>
        </div>
    );
};

export default NewVerification;
