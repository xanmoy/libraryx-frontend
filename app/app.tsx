'use client' 
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function Home() {
	return (
		// <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="container align-baseline justify-center">
        <div className="flex">
            <div className="p-3">
            <Image
  width={300}
  alt="NextUI hero Image"
  src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
/>
            </div>
            <div className="p-3">
            <Image
  width={300}
  alt="NextUI hero Image"
  src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
/>
            </div>
            <div className="p-3">
            <Image
  width={300}
  alt="NextUI hero Image"
  src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
/>
            </div>
        </div>
    </div>
		//  </section>
	);
}
