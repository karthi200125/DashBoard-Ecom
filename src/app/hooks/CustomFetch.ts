'use client'

import { useEffect, useState, useTransition } from "react";

interface CustomFetchProps {
    dependencies?: any[];
    functionProp: (args?: any) => Promise<any>;
    args?: any;
}

export const CustomFetch = ({ dependencies = [], functionProp, args }: CustomFetchProps) => {
    const [isLoading, startTransition] = useTransition();
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            startTransition(async () => {
                const result = await functionProp(args);
                setData(result);
                setError(result?.error || null);
                setSuccess(result?.success || null);
            });
        };
        fetchData();
    }, [dependencies, functionProp, args]);

    return { data, isLoading, error, success };
};
