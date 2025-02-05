"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa"; // Import icons
import PortfolioSection from "../components/ui/portfolioSection";


export default function Home() {

    const profileImage = <Image src="/img/profile.jpg"
        alt="David Álvarez Pons"
        className="rounded-full"
        sizes="100%"
        width={100}
        height={100}
        style={{ width: "100%", height: "auto" }}
    />
    const contactLinks = [
        <Link
            key="linkedin"
            href="https://www.linkedin.com/in/david-alvarez-pons/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
        >
            <FaLinkedin />
        </Link>,
        <Link
            key="github"
            href="https://github.com/davizuku"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
        >
            <FaGithub/>
        </Link>,
        <Link
            key="leetcode"
            href="https://leetcode.com/davizuku"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
        >
            <FaCode />
        </Link>,
    ];

    const bioSection = useRef(null);
    const [showHeader, setShowHeader] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = bioSection.current as HTMLElement | null;
            if (section) {
                setShowHeader(window.scrollY >= section.clientHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <div className="min-h-screen flex flex-col items-center overflow-hidden">
            <header className={`${showHeader ? '' : 'hidden'} fixed bg-accent z-10 top-0 min-w-full flex justify-between items-center p-2 drop-shadow-2xl`}>
                <div className="rounded-full justify-center w-10 md:w-12"><Link href="#">{profileImage}</Link></div>
                <h1 className="text-center text-xl md:text-3xl font-bold">David Álvarez Pons</h1>
                <div className="flex space-x-4 text-sm md:text-xl text-primary">{contactLinks}</div>
            </header>

            <main className="w-full flex flex-col">
                <section ref={bioSection} className="w-full h-screen flex flex-col justify-center bg-secondary">
                    <div className="flex flex-col items-center justify-center gap-5">
                        <div className="rounded-full justify-center w-2/3 md:w-1/2 lg:w-1/3 relative">{profileImage}</div>
                        <h1 className="text-3xl md:text-4xl text-primary font-bold">David Álvarez Pons</h1>
                        <p className="text-primary text-center italic m-auto w-2/3 md:w-1/2 text-balance">
                            Versatile Software Engineer with a passion for sustainable, scalable solutions and team growth.
                        </p>
                        <div className="flex space-x-4 text-2xl text-primary">{contactLinks}</div>
                    </div>
                    <div className="absolute bottom-10 w-full text-center animate-bounce opacity-50 text-xs md:text-base">
                        <p className="text-primary">Scroll down to learn more</p>
                    </div>
                </section>
                <PortfolioSection
                    title="Experience"
                    description="13+ years in the software industry, including AI, private banking, public sector, business applications (CRM & ERP), and embedded systems."
                    imagePath="/img/experience.png"
                    orientation="right"
                    palette="primary"
                />
                <PortfolioSection
                    title="Education & Certifications"
                    description="Bachelor's in Computer Science. Continuous learner with certifications in data structures, algorithms, and cloud technologies."
                    imagePath="/img/education.png"
                    orientation="left"
                    palette="secondary"
                />
                <PortfolioSection
                    title="Projects"
                    description="Showcasing AI, cloud computing, and software engineering expertise through hands-on projects."
                    imagePath="/img/projects.png"
                    orientation="right"
                    palette="primary"
                />
                <PortfolioSection
                    title="Skills"
                    description={<ul className="list-disc list-inside">
                        <li><b>Industry Knowledge</b>: Artificial Intelligence (NLP & ML), Data Analysis, Architectural Design, Project Management, TDD</li>
                        <li><b>Tools & Tech</b>: Backend (Python, PHP, Node.js), Frontend (Next.js, React, Vue), Infrastructure (MySQL, Docker, AWS)</li>
                        <li><b>Interpersonal</b>: Attention to detail, Critical thinking, Problem solving, Team Work, Leadership, Organization</li>
                    </ul>}
                    imagePath="/img/skills.png"
                    orientation="left"
                    palette="secondary"
                />
            </main>

            <footer className="w-full max-w-4xl text-center mt-8 py-4 text-gray-600">
                &copy; {new Date().getFullYear()} David Álvarez Pons. All rights reserved.
            </footer>
        </div>
    );
}
