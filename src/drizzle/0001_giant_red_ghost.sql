ALTER TABLE "resumes" DROP CONSTRAINT "resumes_user_Id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_provider_providerAccountId_pk" PRIMARY KEY("provider","providerAccountId");--> statement-breakpoint
ALTER TABLE "authenticator" ADD CONSTRAINT "authenticator_userId_credentialID_pk" PRIMARY KEY("userId","credentialID");--> statement-breakpoint
ALTER TABLE "verificationToken" ADD CONSTRAINT "verificationToken_identifier_token_pk" PRIMARY KEY("identifier","token");--> statement-breakpoint
ALTER TABLE "resumes" ADD COLUMN "user_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "resumes" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "credits" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "customerId" text;--> statement-breakpoint
ALTER TABLE "resumes" ADD CONSTRAINT "resumes_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resumes" DROP COLUMN "user_Id";--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_customerId_unique" UNIQUE("customerId");