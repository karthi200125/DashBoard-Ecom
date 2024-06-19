'use client'

import { Button } from '@/components/ui/button';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationLink
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const CustomPagination = ({ count }: number) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const displayPageCount = 3;
    const page = parseInt(searchParams.get("page") || "1");

    const ITEM_PER_PAGE = 1;
    const pageCount = Math.ceil(count / ITEM_PER_PAGE);

    const hasPrev = page > 1;
    const hasNext = page < pageCount;

    const changePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());
        router.replace(`${pathname}?${params.toString()}`);
    };

    const generatePaginationLinks = () => {
        const paginationLinks = [];
        const leftEllipsis = page > 2;
        const rightEllipsis = page < pageCount - 1;

        for (let i = 1; i <= pageCount; i++) {
            if (
                i === 1 ||
                i === pageCount ||
                (i >= page - 1 && i <= page + 1)
            ) {
                paginationLinks.push(
                    <PaginationLink
                        key={i}
                        onClick={() => changePage(i)}
                        isActive={page === i}
                    >
                        {i}
                    </PaginationLink>
                );
            }
        }

        if (leftEllipsis) {
            paginationLinks.splice(1, 0, <PaginationEllipsis key="left" />);
        }
        if (rightEllipsis) {
            paginationLinks.splice(
                paginationLinks.length - 1,
                0,
                <PaginationEllipsis key="right" />
            );
        }

        return paginationLinks;
    };

    if (pageCount <= 1) return null;

    return (
        <Pagination>
            <PaginationContent>
                <Button
                    variant="ghost"
                    disabled={!hasPrev}
                    onClick={() => changePage(page - 1)}
                    className="group"
                >
                    <ChevronLeft className="group-hover:-translate-x-1 transition-all duration-300 delay-150" />{" "}
                    Previous
                </Button>
                {generatePaginationLinks()}
                <Button
                    variant="ghost"
                    disabled={!hasNext}
                    onClick={() => changePage(page + 1)}
                    className="group"
                >
                    Next{" "}
                    <ChevronRight className="group-hover:translate-x-1 transition-all duration-300 delay-150" />
                </Button>
            </PaginationContent>
        </Pagination>
    );
}

export default CustomPagination;
