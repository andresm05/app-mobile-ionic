import { IonInput, IonButton } from "@ionic/react";
import * as Yup from "yup";
import { useUser } from "../../../hooks";
import { useFormik } from "formik";
import { ChangeNameFormTypes } from "./ChangeNameForm.types";
import "./ChangeNameForm.scss";

export function ChangeNameForm(props: ChangeNameFormTypes.Props) {
  const { onClose } = props;
  const { onChangeUsername } = useUser();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("danger"),
    }),
    onSubmit: (formData) => {
      onChangeUsername(formData.name)
      onClose();
    },
  });

  return (
    <div className="change-name-form">
      <IonInput placeholder="Nuevo nombre" autoFocus 
      color={formik.errors.name}
      onIonChange={(e) => formik.setFieldValue("name", e.detail.value)}/>
      <IonButton expand="block"
      onClick={() => formik.handleSubmit()}>Actualizar</IonButton>
    </div>
  );
}
