'use server'

import {z} from 'zod'
import {insert} from "@/app/lib/supabase/handlers"
import {Tables} from "@/utils/DatabaseTypes"

const EventApplicantSchema = z.object({
    nom: z.string().min(1, "First name is required"),
    prenom: z.string().min(1, "Last name is required"),
    university: z.string().min(1, "University is required"),
    field: z.string().min(1, "field is required"),
    email: z.string().email("Please enter a valid email address"),
    phonenumber: z.string().regex(/^[0-9]{10}$/, "Invalid phone number, should be 10 digits"),
    howdiduhearaboutus: z.enum(["facebook", "instagram", "friend", "Tiktok", "search"], {
        invalid_type_error: "Please select a valid option",
    }),
    whyjoinus: z.string().min(1, "This question is required"),

})

const WorkshopApplicantSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    field: z.string().min(1, "field is required"),
    nom: z.string().min(1, "First name is required"),
    phonenumber: z.string().regex(/^[0-9]{10}$/, "Invalid phone number, should be 10 digits"),
    prenom: z.string().min(1, "Last name is required"),
    whyjoin: z.string().min(1, "This question is required"),
    university: z.string().min(1, "University is required"),
})

export async function addApplicant(formData: FormData, applicantFor: 'workshop' | 'event') {

    let id : string;
    let isAvailable : boolean;
    applicantFor === 'event' ? id = formData.get('eventid') as string : id  = formData.get('workshopid') as string

    if (!id) {
        return {success: false, message: `${applicantFor} ID is missing`}
    }
    const rawData = Object.fromEntries(formData.entries())
    const termsAccepted = formData.get('termsAccepted') === 'true'

    let validationResult;




    applicantFor === 'event' ? validationResult = EventApplicantSchema.safeParse(rawData) : validationResult = WorkshopApplicantSchema.safeParse(rawData)
    if (!validationResult?.success) {
        return {success: false, errors: validationResult?.error.flatten().fieldErrors}
    }

    const validData =
        {...validationResult.data,
        ...(applicantFor === 'event' ? {eventid: parseInt(id)} : {workshopid: parseInt(id)})
        }


    try {

      applicantFor === 'event' ?  await insert<Tables<'eventapplicants'>>('eventapplicants', validData) : await insert<Tables<'applicants'>>('applicants', validData)


        console.log(validData)
        if (termsAccepted) {
            // @ts-ignore
            const newsletterData: Tables<'newsletter'> = {
                email: validData.email
            }
            await insert<Tables<'newsletter'>>('newsletter', newsletterData)
        }

        return {success: true}
    } catch (error) {

        return {success: false, message: "An error occurred while submitting your application"}
    }
}


