
"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Adarsh",
    designation: "Founder And Software Developer",
    image: "https://scontent.fvns1-1.fna.fbcdn.net/v/t39.30808-6/487087510_4062683640722769_1469700335442254503_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=T82IQGGVje0Q7kNvwFs7wBA&_nc_oc=Adl1UEv9cZ6Wx7d58lflDXG1QpsBSUSG0iwyrjZntbp4D-37Q0HeRTlwm63DMpoX4BeaqCMFyxBlbNr1FfyDiTXh&_nc_zt=23&_nc_ht=scontent.fvns1-1.fna&_nc_gid=2zxXxqkDUcUb4fznUv2xug&oh=00_AfVZbxHvDyQExfjihI3XgJ9O_dW8aS7k4iAU57gieslShA&oe=68AB9D91",
    dataAiHint: "man professional"
  },
  {
    id: 2,
    name: "Ayush Singh",
    designation: "Founder And Software Developer",
    image: "https://scontent.fvns1-3.fna.fbcdn.net/v/t1.6435-9/88185939_2333998856901629_6035420780303482880_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=dpfmhBzNQPAQ7kNvwH2CCHQ&_nc_oc=AdmcLXmz_DeVk4_aUKh044i3NYhjTpOLB7BPiOJ1CT9a0402TBidkYrVOcFDTI4_jApzqijB9T5O6Ku1V1od7kGn&_nc_zt=23&_nc_ht=scontent.fvns1-3.fna&_nc_gid=p9ORw8_G2Qgq130ziBMC8w&oh=00_AfVLdubDKZRI1HA8JPSbqSq066GS4dG9OzwPdFD35Ou5Pg&oe=68CD2F11",
    dataAiHint: "man professional"
  },
  {
    id: 3,
    name: "Aniket Rao",
    designation: "Head of Sales Department",
    image: "https://scontent.fvns1-5.fna.fbcdn.net/v/t39.30808-6/465373803_3867358730247925_7195909265137677548_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=cV9xVhazSxwQ7kNvwFcGkbF&_nc_oc=AdmW8vfpE6_NC9BvJ3gg6PQlVsLT_iMZ3DWL-3drctQmEyUZ6NXOdhwlyFLNu3q49M0O138i1JrLJecjQKj4zSow&_nc_zt=23&_nc_ht=scontent.fvns1-5.fna&_nc_gid=V5Pq5NbiFqer9CfaB2CGIw&oh=00_AfUpczoVjdExW8Yxz7hfYvIgSF-hhuI8dunbMjmV4cz2Iw&oe=68ABA8A6",
    dataAiHint: "man professional"
  },
  {
    id: 4,
    name: "Abhay Sharma",
    designation: "Sales Manager",
    image: "https://scontent.fvns1-2.fna.fbcdn.net/v/t39.30808-6/499580866_3661175274179673_8142405376194900378_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jWQNTE-URGEQ7kNvwGCtvRL&_nc_oc=AdnBTkCNYPe50XikU2iYSNXB2Nlgz_SIi96BB7yqAznXOUBiQ-p6eJmPTyZfJCXCs128cA1sY9WgG9B8ueNvXp5u&_nc_zt=23&_nc_ht=scontent.fvns1-2.fna&_nc_gid=CmxfyhwNXyqzgpAuu4ybug&oh=00_AfVuiVrstDMv4UoCWZHH3uCX8peLPFhS5aFa_M2PvZKC6w&oe=68AB9C8F",
    dataAiHint: "man professional"
  },
  {
    id: 5,
    name: "Ayush Pandey",
    designation: "Head of Digital Marketing",
    image: "https://scontent.fvns1-5.fna.fbcdn.net/v/t39.30808-6/462238912_8361536720631910_3559006727926121631_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=cf4XFlwEUO0Q7kNvwGBUtny&_nc_oc=Adnar-_3h4ZnxDX-tEE7O5q-Vw6b2fdDMRmHIT3M3vZuGCZpDNZeLLh73zW82z_rDEAGGzzUfZHcEycQ5cOPwORz&_nc_zt=23&_nc_ht=scontent.fvns1-5.fna&_nc_gid=4vmw9ejmyZrG-YM8XPjkrA&oh=00_AfX1Fk6hWfPnZjGRY4Ycq3NTI7pCP_HYhYGrSTeqp6Xpnw&oe=68ABA5E0",
    dataAiHint: "man professional"
  },
  {
    id: 6,
    name: "Akhand Singh",
    designation: "Full Stack Dev.",
    image: "https://scontent.fvns1-5.fna.fbcdn.net/v/t39.30808-6/466733717_122174500160171067_50982842887120990_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jq920UBg-wQQ7kNvwGnZsd-&_nc_oc=Adlb1GxXqxUGAJiBZ3CskngNiIPZrDFrm5LSKNkc6X6D7qwpqzM-IgNiQg_54LZXBITvPKwUpPDa9uuWQvUK1q_0&_nc_zt=23&_nc_ht=scontent.fvns1-5.fna&_nc_gid=Un-j0XvW7_S0vWMI4sh1-w&oh=00_AfVWloOI_t1Gydjw-YhDYH51fTdD-YBza2gLSEswy8WOgQ&oe=68AB7E23",
    dataAiHint: "man professional"
  },
];

export function TeamMembersSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-foreground">
          Meet Our Team
        </h2>
        <div className="flex flex-row items-center justify-center w-full">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </section>
  );
}