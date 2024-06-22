import { useGetCategoriesQuery } from "@/app/redux/features/authApiSlice";

export default function useFetchCategories() {
    const { data: categories, isLoading, isError } = useGetCategoriesQuery();

    return {
        categories,
        isLoading,
        isError,
    };
}