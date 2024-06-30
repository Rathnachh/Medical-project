import React from "react";
import Container from "../Container";
import SaleOfTheMonthCard from "./SaleOfTheMonthCard";
import MaterialsDoctorCard from "./MaterialsDoctorCard";
import DiscountCard from "./DiscountCard";

const SaleOfTheMonthSection = () => {
  return (
    <section className="w-full">
      <Container>
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SaleOfTheMonthCard />
            <MaterialsDoctorCard />
            <DiscountCard />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SaleOfTheMonthSection;
