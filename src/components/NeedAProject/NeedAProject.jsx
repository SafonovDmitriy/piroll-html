import React, { useState } from "react";
import { FormInput } from "../../elements/Forms/TextArea";
import {
  TextBlockSubtitle,
  TextBlockTitle
} from "../../elements/TextBlock/TextBlock";
import s from "./NeedAProject.module.css";
import CustomButton from "../../elements/utils/CustomButton/CustomButton";

const showInput = (form, setForm, key) => {
  return (
    <div className={s.inputBlock}>
      <FormInput
        name={[key]}
        value={form[key]}
        placeholder={`Your ${[key]}`}
        setForm={setForm}
        form={form}
      />
      {form[key].err && <span>{form[key].err}</span>}
    </div>
  );
};

const NeedAProject = () => {
  const [form, setForm] = useState({
    name: { title: "", err: undefined },
    email: { title: "", err: undefined },
    title: { title: "", err: undefined },
    comment: { title: "", err: undefined }
  });

  const getForm = () => {};
  return (
    <div className={s.container}>
      <div className={s.container__header}>
        <TextBlockTitle title="Need a Project?" />
        <TextBlockSubtitle subtitle="Let us know what you're looking for in an agency. We'll take a look and see if this could be the start of something beautiful." />
      </div>
      <div className={s.container__form}>
        <div className={s.form__firstBlock}>
          {showInput(form, setForm, "name")}
          {showInput(form, setForm, "email")}
        </div>
        <div className={s.form__secondBlock}>
          {showInput(form, setForm, "title")}
          {showInput(form, setForm, "comment")}
        </div>
        <div className={s.form__btn}>
          <CustomButton onClick={getForm} value="send message" />
        </div>
      </div>
    </div>
  );
};

export default NeedAProject;
