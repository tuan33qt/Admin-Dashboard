import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
function useBooking() {
  const [searchParams] = useSearchParams();
  // Filter
  const filterValue = searchParams.get("status"); // Lấy giá trị của tham số "status" từ searchParams
  const filter =
    !filterValue || filterValue === "all" // Kiểm tra nếu filterValue là null, undefined, chuỗi rỗng hoặc bằng "all"
      ? null // Nếu đúng thì gán giá trị null cho biến filter
      : { field: "status", value: filterValue }; // Ngược lại, tạo một đối tượng với field là "status" và value là filterValue
  // SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-"); //Chia chuỗi sortByRaw thành một mảng dựa trên dấu gạch ngang ("-").
  const sortBy = { field, direction };
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });
  return { isLoading, error, bookings };
}

export default useBooking;
