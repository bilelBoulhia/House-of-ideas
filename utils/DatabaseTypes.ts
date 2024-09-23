export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    public: {
        Tables: {
            applicants: {
                Row: {
                    applicantid: number
                    email: string
                    field: string
                    isactive: boolean
                    nom: string
                    phonenumber: string
                    prenom: string
                    university: string
                    workshopid: number
                }
                Insert: {
                    applicantid?: number
                    email: string
                    field: string
                    isactive: boolean
                    nom: string
                    phonenumber: string
                    prenom: string
                    university: string
                    workshopid: number
                }
                Update: {
                    applicantid?: number
                    email?: string
                    field?: string
                    isactive?: boolean
                    nom?: string
                    phonenumber?: string
                    prenom?: string
                    university?: string
                    workshopid?: number
                }
                Relationships: [
                    {
                        foreignKeyName: "applicants_workshopid_fkey"
                        columns: ["workshopid"]
                        isOneToOne: false
                        referencedRelation: "workshops"
                        referencedColumns: ["workshopid"]
                    },
                ]
            }
            events: {
                Row: {
                    eventdate: string
                    eventdescription: string
                    eventendhour: string
                    eventid: number
                    eventlocation: string
                    eventname: string
                    eventpic: string
                    eventstarthour: string | null
                    guest: number | null
                    sponsor: number | null
                }
                Insert: {
                    eventdate: string
                    eventdescription: string
                    eventendhour: string
                    eventid?: number
                    eventlocation: string
                    eventname: string
                    eventpic: string
                    eventstarthour?: string | null
                    guest?: number | null
                    sponsor?: number | null
                }
                Update: {
                    eventdate?: string
                    eventdescription?: string
                    eventendhour?: string
                    eventid?: number
                    eventlocation?: string
                    eventname?: string
                    eventpic?: string
                    eventstarthour?: string | null
                    guest?: number | null
                    sponsor?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "Events_guest_fkey"
                        columns: ["guest"]
                        isOneToOne: false
                        referencedRelation: "guests"
                        referencedColumns: ["guestid"]
                    },
                    {
                        foreignKeyName: "Events_sponsor_fkey"
                        columns: ["sponsor"]
                        isOneToOne: false
                        referencedRelation: "sponsors"
                        referencedColumns: ["sponsorid"]
                    },
                ]
            }
            guests: {
                Row: {
                    guestid: number
                    guestname: string
                    guestoccupation: string[]
                    guestpic: string
                }
                Insert: {
                    guestid?: number
                    guestname: string
                    guestoccupation: string[]
                    guestpic: string
                }
                Update: {
                    guestid?: number
                    guestname?: string
                    guestoccupation?: string[]
                    guestpic?: string
                }
                Relationships: []
            }
            reviews: {
                Row: {
                    isaccepted: boolean
                    review: string
                    reviewer: string
                    reviewid: number
                }
                Insert: {
                    isaccepted: boolean
                    review: string
                    reviewer: string
                    reviewid?: number
                }
                Update: {
                    isaccepted?: boolean
                    review?: string
                    reviewer?: string
                    reviewid?: number
                }
                Relationships: []
            }
            sponsors: {
                Row: {
                    sponsorid: number
                    sponsorpic: string
                }
                Insert: {
                    sponsorid?: number
                    sponsorpic: string
                }
                Update: {
                    sponsorid?: number
                    sponsorpic?: string
                }
                Relationships: []
            }
            tutors: {
                Row: {
                    tutorid: number
                    tutorname: string
                    tutoroccupation: string
                    tutorpic: string | null
                }
                Insert: {
                    tutorid?: number
                    tutorname: string
                    tutoroccupation: string
                    tutorpic?: string | null
                }
                Update: {
                    tutorid?: number
                    tutorname?: string
                    tutoroccupation?: string
                    tutorpic?: string | null
                }
                Relationships: []
            }
            workshops: {
                Row: {
                    isavailable: boolean
                    tutor: number | null
                    workshopdescription: string
                    workshopid: number
                    workshopname: string
                }
                Insert: {
                    isavailable: boolean
                    tutor?: number | null
                    workshopdescription: string
                    workshopid?: number
                    workshopname: string
                }
                Update: {
                    isavailable?: boolean
                    tutor?: number | null
                    workshopdescription?: string
                    workshopid?: number
                    workshopname?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "workshops_tutor_fkey"
                        columns: ["tutor"]
                        isOneToOne: false
                        referencedRelation: "tutors"
                        referencedColumns: ["tutorid"]
                    },
                ]
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
    PublicTableNameOrOptions extends | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
            Database[PublicTableNameOrOptions["schema"]]["Views"])
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
            Row: infer R
        }
        ? R
        : never
    : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
            PublicSchema["Views"])
        ? (PublicSchema["Tables"] &
            PublicSchema["Views"])[PublicTableNameOrOptions] extends {
                Row: infer R
            }
            ? R
            : never
        : never

export type TablesInsert<
    PublicTableNameOrOptions extends | keyof PublicSchema["Tables"]
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
            Insert: infer I
        }
        ? I
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
        ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
                Insert: infer I
            }
            ? I
            : never
        : never

export type TablesUpdate<
    PublicTableNameOrOptions extends | keyof PublicSchema["Tables"]
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
            Update: infer U
        }
        ? U
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
        ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
                Update: infer U
            }
            ? U
            : never
        : never

export type Enums<
    PublicEnumNameOrOptions extends | keyof PublicSchema["Enums"]
        | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
        : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
        ? PublicSchema["Enums"][PublicEnumNameOrOptions]
        : never
