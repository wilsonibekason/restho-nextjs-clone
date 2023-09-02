"use client";

import { Button, Heading, Input, Paragraph } from "@/components/common";
import { PageWrapper } from "@/components/layout";
import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";

const SectionSeven = () => {
  const SectionSevenStyles = {
    Layout: tw.div`w-full`,
    Center: tw.div`flex flex-col text-white items-center justify-center`,
    Grid: tw.div`grid grid-cols-4 gap-x-4 gap-y-6 px-0 md:px-40 mt-12`,
    Card: tw.div`col-span-4 md:col-span-2`,
  };
  const { Layout, Center, Grid, Card } = SectionSevenStyles;
  return (
    <PageWrapper classNames="reservarion-area">
      <Layout>
        <Center>
          <div className="flex gap-x-2">
            <Image
              src={
                "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
              }
              alt=""
              width={20}
              height={20}
            />
            <Paragraph className="text-[#bf9444]">About to Restho</Paragraph>
            <Image
              src={
                "https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
              }
              alt=""
              width={20}
              height={20}
            />
          </div>
          <Heading className="text-6xl mt-2">For Online Reservation</Heading>
        </Center>
        {/*  */}
        <Grid>
          {Array(6)
            .fill("")
            .map((_) => (
              <>
                <Card key={_}>
                  <Input
                    className="w-full bg-[#09161d] border border-slate-300 outline-none focus:border-[#bf9444] focus-within:border-[#bf9444] transition duration-100 rounded-[50px] px-4 py-6 placeholder:text-base text-base text-white font-normal"
                    placeholder="Name*"
                  />
                </Card>
              </>
            ))}
        </Grid>
        <div className="flex items-center justify-center mt-6 px-0 md:px-40">
          <Button className="col-span-6 flex items-center text-[#bf9444] px-24 py-4 gap-x-3 border border-[#bf9444] rounded-full ">
            <Paragraph>Reserve Now</Paragraph>
          </Button>
        </div>
      </Layout>
    </PageWrapper>
  );
};

export default SectionSeven;