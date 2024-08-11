import { api } from "@/app/api/instance"
import { Ingredient } from "@/types/pizzas"
import { useQuery } from "@tanstack/react-query"

export const useGetAllIngredients = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["ingredients"],
		queryFn: () => api.get<Ingredient[]>("/ingredients"),
		select: data => data.data,
		refetchInterval: 1000000,
		refetchOnWindowFocus: false,
	})
	return { data, isLoading, error }
}
