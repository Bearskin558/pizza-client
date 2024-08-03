import { api } from "@/app/api/instance"
import { useQuery } from "@tanstack/react-query"

export const useGetAllPizzas = () => {
	const { data, error, isLoading } = useQuery({ queryKey: ["pizzas"], queryFn: () => api.get("/pizzas") })
	return { data, error, isLoading }
}
