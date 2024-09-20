import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Button} from "@/components/ui/button";


export const SubscribeForm = () => {
  return (

    <form className="space-y-8">
      <div className="border-b border-gray-900/10 pb-12 text-left">
        <h2 className="text-2xl font-semibold leading-7">Personal Information</h2>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          This information will only Appear to Mods Please ensure it's correct so We can contact you
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 ">
          <div className="sm:col-span-1">
            <Label htmlFor="first-name">First name</Label>
            <Input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="mt-2"
            />
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="mt-2"
            />
          </div>

          <div className="sm:col-span-3">
            <Label htmlFor="email">Email address</Label>
            <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-2"
            />
          </div>
          <div className="sm:col-span-1">
            <Label htmlFor="email">University</Label>
            <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-2"
            />
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="email">Field</Label>
            <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-2"
            />
          </div>

          <div className="sm:col-span-3">
            <Label htmlFor="phone">Phone number</Label>
            <Input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="mt-2"
            />
          </div>

          <div className="sm:col-span-full">
            <div className="flex items-center space-x-2">

              <Button>Submit</Button>

            </div>
          </div>
        </div>
      </div>
    </form>
  )
}