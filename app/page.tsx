'use client' 
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Inter } from 'next/font/google'
import styled from 'styled-components';
// import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";

export default function Home() {
  const StyledH2 = styled.h2`
  font-size: 34px;
  
  /* Add any other CSS styles you want here */
`;
	return (
   <>
   <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Welcome to&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>LibraryX&nbsp;</h1>
				<br />
				<h1 className={title()}>
					
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					
				</h2>
			</div>

			<div className="flex gap-3">
				{/* <Link
					isExternal
					as={NextLink}
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "warning", radius: "full", variant: "shadow" })}
				>
					Labs
				</Link>
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "success", radius: "full", variant: "shadow" })}
				>
					Med Stores
				</Link> */}
				{/* <Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link> */}
			</div>

			<div className="mt-8">
				{/* <Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						 <Code color="primary"></Code>
					</span>
				</Snippet> */}
         

			</div>
      </section>
</>
	);
}
