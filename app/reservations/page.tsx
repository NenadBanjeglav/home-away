import CountryName from "@/components/card/CountryName";
import EmptyList from "@/components/home/EmptyList";
import Stats from "@/components/reservations/Stats";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchReservations } from "@/utils/actions";
import { formatCurrency, formatDate } from "@/utils/format";

import Link from "next/link";
import React from "react";

const ReservationsPage = async () => {
  const reservations = await fetchReservations();
  if (reservations.length === 0) return <EmptyList />;

  return (
    <>
      <Stats />
      <div className="mt-16">
        <h4 className="mb-4 capitalize">
          Total reservations: {reservations.length}
        </h4>

        <Table>
          <TableCaption>A list of recent reservations</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Property Name</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Nights</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Check In</TableHead>
              <TableHead>Check Out</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reservations.map((item) => {
              const { id, orderTotal, totalNights, checkIn, checkOut } = item;
              const { id: propertyId, name, country } = item.property;
              const startDate = formatDate(checkIn);
              const endDate = formatDate(checkOut);
              return (
                <TableRow key={id}>
                  <TableCell>
                    <Link
                      href={`/properties/${propertyId}`}
                      className="tracking-wide text-muted-foreground underline"
                    >
                      {name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <CountryName countryCode={country} />
                  </TableCell>
                  <TableCell>{totalNights}</TableCell>
                  <TableCell>{formatCurrency(orderTotal)}</TableCell>
                  <TableCell>{startDate}</TableCell>
                  <TableCell>{endDate}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ReservationsPage;
