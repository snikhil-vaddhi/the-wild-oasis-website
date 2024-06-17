import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinid } = params;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinid),
      getBookedDatesByCabinId(cabinid),
    ]);
    console.log(bookedDates);
    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: "Cabin not found" });
  }
}
