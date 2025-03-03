"use client"

import { BaseDiaLogProps, Dialog } from "@/components/ui/dialog/index"
import { InputField } from "@/components/ui/input/field"
import { FormProvider, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"

type FormData = {
    title: string;
}

export const NewResumeDialog = (props: BaseDiaLogProps) => {
    const methods = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <Dialog
            {...props}
            title="Criar novo currículo"
            description="Preencha as informações abaixo para criar um novo currículo."
            content={
                <FormProvider {...methods}>
                    <form className="flex flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
                        <InputField label="Titulo" name="title" required />

                        <Button
                            type="submit"
                            className="w=max mt-6 ml-auto"
                        >
                            Criar
                        </Button>
                    </form>
                </FormProvider>
            }
        />
    )
}