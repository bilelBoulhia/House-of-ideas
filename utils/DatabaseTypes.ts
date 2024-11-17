export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      applicants: {
        Row: {
          applicantid: number
          createdat: string
          email: string
          field: string
          isactive: boolean
          isconfirmed: boolean
          nom: string
          phonenumber: string
          prenom: string
          university: string
          whyjoin: string
          workshopid: number
        }
        Insert: {
          applicantid?: number
          createdat?: string
          email: string
          field: string
          isactive?: boolean
          isconfirmed?: boolean
          nom: string
          phonenumber: string
          prenom: string
          university: string
          whyjoin: string
          workshopid: number
        }
        Update: {
          applicantid?: number
          createdat?: string
          email?: string
          field?: string
          isactive?: boolean
          isconfirmed?: boolean
          nom?: string
          phonenumber?: string
          prenom?: string
          university?: string
          whyjoin?: string
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
      event_guest: {
        Row: {
          eventid: number
          guestid: number
        }
        Insert: {
          eventid: number
          guestid: number
        }
        Update: {
          eventid?: number
          guestid?: number
        }
        Relationships: [
          {
            foreignKeyName: "event_guest_eventid_fkey"
            columns: ["eventid"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["eventid"]
          },
          {
            foreignKeyName: "event_guest_guestid_fkey"
            columns: ["guestid"]
            isOneToOne: false
            referencedRelation: "guests"
            referencedColumns: ["guestid"]
          },
        ]
      }
      event_sponsors: {
        Row: {
          eventid: number
          sponsorid: number
        }
        Insert: {
          eventid: number
          sponsorid: number
        }
        Update: {
          eventid?: number
          sponsorid?: number
        }
        Relationships: [
          {
            foreignKeyName: "event_sponors_eventid_fkey"
            columns: ["eventid"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["eventid"]
          },
          {
            foreignKeyName: "event_sponors_sponsorid_fkey"
            columns: ["sponsorid"]
            isOneToOne: false
            referencedRelation: "sponsors"
            referencedColumns: ["sponsorid"]
          },
        ]
      }
      eventapplicants: {
        Row: {
          createdat: string
          email: string
          eventapplicantid: number
          eventid: number
          field: string
          howdiduhearaboutus: string
          isactive: boolean
          isconfirmed: boolean
          nom: string
          phonenumber: string
          prenom: string
          university: string
          whyjoinus: string
        }
        Insert: {
          createdat?: string
          email: string
          eventapplicantid?: number
          eventid: number
          field: string
          howdiduhearaboutus: string
          isactive?: boolean
          isconfirmed?: boolean
          nom: string
          phonenumber: string
          prenom: string
          university: string
          whyjoinus: string
        }
        Update: {
          createdat?: string
          email?: string
          eventapplicantid?: number
          eventid?: number
          field?: string
          howdiduhearaboutus?: string
          isactive?: boolean
          isconfirmed?: boolean
          nom?: string
          phonenumber?: string
          prenom?: string
          university?: string
          whyjoinus?: string
        }
        Relationships: [
          {
            foreignKeyName: "eventapplicants_eventid_fkey"
            columns: ["eventid"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["eventid"]
          },
        ]
      }
      events: {
        Row: {
          createdat: string
          date: string
          eventdescription: string
          eventendhour: string
          eventid: number
          eventlocation: string
          eventname: string
          eventpic: string
          eventstarthour: string
          instagramlink: string
          isavailable: boolean
          visitorsnum: number | null
        }
        Insert: {
          createdat?: string
          date: string
          eventdescription: string
          eventendhour: string
          eventid?: number
          eventlocation: string
          eventname: string
          eventpic?: string
          eventstarthour: string
          instagramlink: string
          isavailable?: boolean
          visitorsnum?: number | null
        }
        Update: {
          createdat?: string
          date?: string
          eventdescription?: string
          eventendhour?: string
          eventid?: number
          eventlocation?: string
          eventname?: string
          eventpic?: string
          eventstarthour?: string
          instagramlink?: string
          isavailable?: boolean
          visitorsnum?: number | null
        }
        Relationships: []
      }
      formationapplicants: {
        Row: {
          email: string
          formationid: number
          id: number
          nom: string
          "phone number": number
          prenom: string
          whydoyouwant: string
        }
        Insert: {
          email: string
          formationid: number
          id?: number
          nom: string
          "phone number": number
          prenom: string
          whydoyouwant: string
        }
        Update: {
          email?: string
          formationid?: number
          id?: number
          nom?: string
          "phone number"?: number
          prenom?: string
          whydoyouwant?: string
        }
        Relationships: [
          {
            foreignKeyName: "formationapplicants_formationid_fkey"
            columns: ["formationid"]
            isOneToOne: false
            referencedRelation: "formations"
            referencedColumns: ["id"]
          },
        ]
      }
      formations: {
        Row: {
          Date: string
          description: string
          endhour: string
          formationname: string
          formationpic: string | null
          id: number
          Location: string
          starthour: string
          tutorid: number
        }
        Insert: {
          Date: string
          description: string
          endhour: string
          formationname: string
          formationpic?: string | null
          id?: number
          Location: string
          starthour: string
          tutorid: number
        }
        Update: {
          Date?: string
          description?: string
          endhour?: string
          formationname?: string
          formationpic?: string | null
          id?: number
          Location?: string
          starthour?: string
          tutorid?: number
        }
        Relationships: [
          {
            foreignKeyName: "formations_tutorid_fkey"
            columns: ["tutorid"]
            isOneToOne: false
            referencedRelation: "tutors"
            referencedColumns: ["tutorid"]
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
          guestpic?: string
        }
        Update: {
          guestid?: number
          guestname?: string
          guestoccupation?: string[]
          guestpic?: string
        }
        Relationships: []
      }
      newsletter: {
        Row: {
          email: string
          id: number
        }
        Insert: {
          email: string
          id?: number
        }
        Update: {
          email?: string
          id?: number
        }
        Relationships: []
      }
      reviews: {
        Row: {
          createdat: string
          isaccepted: boolean
          review: string
          reviewer: string
          reviewid: number
        }
        Insert: {
          createdat?: string
          isaccepted?: boolean
          review: string
          reviewer: string
          reviewid?: number
        }
        Update: {
          createdat?: string
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
          sponsorname: string
          sponsorpic: string
        }
        Insert: {
          sponsorid?: number
          sponsorname: string
          sponsorpic?: string
        }
        Update: {
          sponsorid?: number
          sponsorname?: string
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
          createdat: string
          date: string
          endhour: string
          isavailable: boolean
          starthour: string
          tutor: number
          workshopdescription: string
          workshopid: number
          workshopname: string
        }
        Insert: {
          createdat?: string
          date: string
          endhour: string
          isavailable?: boolean
          starthour: string
          tutor: number
          workshopdescription: string
          workshopid?: number
          workshopname: string
        }
        Update: {
          createdat?: string
          date?: string
          endhour?: string
          isavailable?: boolean
          starthour?: string
          tutor?: number
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
      get_event_details: {
        Args: {
          p_eventid: number
        }
        Returns: {
          eventid: number
          eventname: string
          eventdescription: string
          eventpic: string
          eventlocation: string
          date: string
          eventstarthour: string
          eventendhour: string
          isavailable: boolean
          instagramlink: string
          visitorsnum: number
          guests: Json
          sponsor_pics: string[]
        }[]
      }
      get_events_bydate:
          | {
        Args: {
          p_eventid: number
          isold: boolean
        }
        Returns: {
          eventid: number
          eventname: string
          eventdescription: string
          eventpic: string
          eventlocation: string
          date: string
          eventstarthour: string
          eventendhour: string
          isavailable: boolean
          instagramlink: string
          visitorsnum: number
          guests: Json
          sponsors: Json
        }[]
      }
          | {
        Args: {
          p_isold: boolean
        }
        Returns: {
          eventid: number
          eventname: string
          eventdescription: string
          eventpic: string
          eventlocation: string
          date: string
          eventstarthour: string
          eventendhour: string
          isavailable: boolean
          instagramlink: string
          visitorsnum: number
          guests: Json
          sponsors: Json
        }[]
      }
      get_future_event_applicants: {
        Args: {
          p_isactive: boolean
          p_isconfirmed: boolean
        }
        Returns: {
          eventid: number
          eventname: string
          eventapplicantid: number
          email: string
          nom: string
          prenom: string
          phonenumber: string
          isactive: boolean
          isconfirmed: boolean
          whyjoinus: string
          howdiduhearaboutus: string
          university: string
          field: string
          createdat: string
        }[]
      }
      get_future_workshop_applicants: {
        Args: {
          p_isactive: boolean
          p_isconfirmed: boolean
        }
        Returns: {
          workshopid: number
          workshopname: string
          applicantid: number
          email: string
          nom: string
          prenom: string
          phonenumber: string
          isactive: boolean
          university: string
          field: string
          whyjoin: string
          isconfirmed: boolean
          createdat: string
        }[]
      }
      get_workshop_with_tutorname: {
        Args: {
          p_old: boolean
        }
        Returns: {
          workshopid: number
          workshopdescription: string
          tutor: number
          workshopname: string
          date: string
          starthour: string
          endhour: string
          createdat: string
          tutorname: string
          tutorid: number
        }[]
      }
      insert_event_guests_and_sponsors: {
        Args: {
          p_eventname: string
          p_eventdescription: string
          p_eventpic: string
          p_eventlocation: string
          p_date: string
          p_eventstarthour: string
          p_eventendhour: string
          p_instagramlink: string
          p_visitorsnum: number
          p_guestids: number[]
          p_sponsorids: number[]
        }
        Returns: number
      }
      update_past_events: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      update_workshop_availability: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      guest_info: {
        name: string | null
        occupations: string[] | null
      }
      insert_result: {
        status: string | null
        message: string | null
        guestid: number | null
      }
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
    PublicTableNameOrOptions extends
            | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
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
    PublicTableNameOrOptions extends
            | keyof PublicSchema["Tables"]
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
    PublicTableNameOrOptions extends
            | keyof PublicSchema["Tables"]
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
    PublicEnumNameOrOptions extends
            | keyof PublicSchema["Enums"]
        | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
        : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
        ? PublicSchema["Enums"][PublicEnumNameOrOptions]
        : never

export type CompositeTypes<
    PublicCompositeTypeNameOrOptions extends
            | keyof PublicSchema["CompositeTypes"]
        | { schema: keyof Database },
    CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
          schema: keyof Database
        }
        ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
        : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
    ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
    : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
        ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
        : never
