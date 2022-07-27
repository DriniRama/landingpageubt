import React from "react";

const AboutUs: React.FC = () => {
    return <section className={"flex flex-col bg-white text-3xl md:text-4xl"}>
        <div className="container mx-auto px-11">
            <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
                <strong>We will help you ship beter apps, faster.</strong> Our team of expert engineers has created the best user experience in some of the most popular apps worldwide
            </p>
        </div>
        <div className="container mx-auto px-11 text-center mt-28">
            <h2>Our team </h2>
            <div className="mt-2">the&ldquo;spec-ops&rdquo;</div>
            <div className="mt-10 grid grid-cols-2md:grid-cols-3lg:grid-cols-4xl:grid-cols-5gap-6lg:gap-20"></div>
        </div>
        About Us</section>

}
export default AboutUs