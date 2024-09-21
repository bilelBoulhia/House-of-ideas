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
          isactive: boolean
          nom: string
          phonenumber: string
          prenom: string
        }
        Insert: {
          applicantid?: number
          email: string
          isactive: boolean
          nom: string
          phonenumber: string
          prenom: string
        }
        Update: {
          applicantid?: number
          email?: string
          isactive?: boolean
          nom?: string
          phonenumber?: string
          prenom?: string
        }
        Relationships: []
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
          eventstarthour: string
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
          eventstarthour: string
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
          eventstarthour?: string
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
      formation: {
        Row: {
          formationame: string
          formationdescription: string
          formationid: number
          isavailable: boolean
          tutor: number | null
        }
        Insert: {
          formationame: string
          formationdescription: string
          formationid?: number
          isavailable: boolean
          tutor?: number | null
        }
        Update: {
          formationame?: string
          formationdescription?: string
          formationid?: number
          isavailable?: boolean
          tutor?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "formation_tutor_fkey"
            columns: ["tutor"]
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
          sponsorpic: string | null
        }
        Insert: {
          sponsorid?: number
          sponsorpic?: string | null
        }
        Update: {
          sponsorid?: number
          sponsorpic?: string | null
        }
        Relationships: []
      }
      tutors: {
        Row: {
          guestpic: string
          tutorid: number
          tutorname: string
          tutoroccupation: string
        }
        Insert: {
          guestpic: string
          tutorid?: number
          tutorname: string
          tutoroccupation: string
        }
        Update: {
          guestpic?: string
          tutorid?: number
          tutorname?: string
          tutoroccupation?: string
        }
        Relationships: []
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
