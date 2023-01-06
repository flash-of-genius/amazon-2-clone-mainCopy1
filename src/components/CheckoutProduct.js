import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
}) {
    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* Middle */}
            <div classname="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_, i) => {
                            <StarIcon
                                key={i}
                                className="h-5 text-yellow-500"
                            />;
                        })}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
            </div>
        </div>
    );
}

export default CheckoutProduct;
