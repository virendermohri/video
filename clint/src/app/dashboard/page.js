"use client";
import React, { useState } from 'react'
const page = () => {
    const [formData, setFormData] = useState({ videotitle: "", videoTag: "", thumbnailUrl: "", videoDescription: "", categories: [], videoUrl: "" });
    const adultCategories = [
        "Desi",
        "Bhabi",
        "College",
        "Aunty",
        "village",
        "Hindi Audio",
        "StepMom",
        "punjabi",
        "Pakistani",
        "Indian",
        "Nepali",
        "Bangladeshi",
        "MILF",
        "doggy style",
        "Masturbation",
        "big boobs",
        "Tamil",
        "Bathrrom",
        "Maid",
        "Outdoor",
        "Cousin",
        "Step Sister",
        "Step Dad",
        "Step Brother",
        "Step Family",
        "Step Son",
        "Step Daughter",
        "Handjob",
        "Fingering",
        "Amateur",
        "Anal",
        "Asian",
        "BBW",
        "BDSM",
        "Big Dick",
        "Blonde",
        "Blowjob",
        "Brunette",
        "Creampie",
        "Cumshot",
        "Ebony",
        "Fetish",
        "Gangbang",
        "Gay",
        "Hardcore",
        "Latina",
        "Lesbian",
        "Orgy",
        "Public",
        "POV",
        "Redhead",
        "Roleplay",
        "Solo Female",
        "Squirt",
        "Teen",
        "Threesome",
        "Trans",
        "VR Porn"
    ];
    return (
        <div className=' text-black   pt-10 p-5 bg-gray-100'>
            <div className="max-w-3xl m-auto bg-white px-5 py-10  rounded-lg shadow-lg">

                <div className="pb-10" >
                    <h1 className='text-xl text-center font-bold'>Dashboard</h1>
                </div>
                <div className="flex flex-col  gap-5">
                    <div className="flex md:flex-row flex-col gap-5 justify-between">
                        <textarea onChange={(e) => setFormData({ ...formData, videotitle: e.target.value })} type="text" className='px-3 md:w-[50%] py-1 border rounded' placeholder='Enter video titel' />
                        <input type="file" className='px-3 md:w-[50%] py-1 border rounded' placeholder='Enter video thumbnail' />
                    </div>
                    <textarea onChange={(e) => setFormData({ ...formData, videoDescription: e.target.value })} type='text-area' className='px-3 py-1 border rounded' placeholder='Enter video description' />
                    <div className="flex  justify-between">
                        <p className='text-gray-500'>Choose Thumbnail</p>
                        <input type="file" className='px-3 w-[50%] py-1 border rounded' placeholder='Enter video thumbnail' />
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold">Select Categories:</p>
                            <div className="flex flex-wrap gap-2">
                                {adultCategories.map((cat) => (
                                    <button
                                        key={cat}
                                        type="button"
                                        className={`px-3 py-1 rounded-full border ${formData.categories.includes(cat)
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-200 text-black"
                                            }`}
                                        onClick={() => {
                                            const selected = formData.categories.includes(cat)
                                                ? formData.categories.filter((c) => c !== cat)
                                                : [...formData.categories, cat];
                                            setFormData({ ...formData, categories: selected });
                                        }}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {formData.categories.length > 0 && (
                                <div className="mt-2 text-sm text-green-600">
                                    Selected: {formData.categories.join(", ")}
                                </div>
                            )}
                        </div>
                    </div>

                    <button className='m-auto py-2 w-[70%] rounded shadow-xl bg-green-500 text-white'>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default page
