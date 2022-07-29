import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
    return <section className={"flex flex-col bg-white text-3xl md:text-4xl"}>
        <div className="container mx-auto px-11">
            <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
                <strong>We will help you ship better apps, faster.</strong> Our team of expert engineers has created the best user experience in some of the most popular apps worldwide
            </p>
        </div>
        <div className="container mx-auto px-11 text-center mt-28">
            <h2>Our team </h2>
            <div className="mt-2">the&ldquo;spec-ops&rdquo;</div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
                <Member
                    id="ardit"
                    name="Ardit"
                    socialId="@arditshefkiu"
                    link="#"
                />
                <Member
                    id="endrit"
                    name="Endrit"
                    socialId="@pixendrit"
                    link="#"
                />
                <Member
                    id="shqiprim"
                    name="Shqiprim"
                    socialId="@shqiprimramadani"
                    link="#"
                />
                <Member
                    id="bleona"
                    name="Bleona"
                    socialId="@bleonabytyqi"
                    link="#"
                />
                <Member
                    id="bleonë"
                    name="Bleonë"
                    socialId="@bleonëhaliti"
                    link="#"
                />
            </div>
        </div>
        About Us</section>

}
export default AboutUs