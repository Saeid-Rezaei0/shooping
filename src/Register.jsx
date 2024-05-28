import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import LayOUT from "./LayOUT";
import swal from "sweetalert";

const translations = {
  register: {
    title: "",
    introMessage: "به وب سایت فروشگاهی ما خوش آمدید. لطفاً اطلاعات زیر را وارد کنید تا ثبت نام کنید.",
    alreadyRegistered: "قبلاً ثبت نام کرده‌اید؟",
    signin: "ورود",
    firstName: "نام",
    lastName: "نام خانوادگی",
    email: "ایمیل",
    password: "رمز عبور",
    confirmPassword: "تاییدیه رمز عبور",
    validation: {
      firstNameRequired: "وارد کردن نام الزامی است.",
      lastNameRequired: "وارد کردن نام خانوادگی الزامی است.",
      emailRequired: "وارد کردن ایمیل الزامی است.",
      emailInvalid: "ایمیل وارد شده معتبر نیست.",
      passwordRequired: "وارد کردن رمز عبور الزامی است.",
      passwordMinLength: "رمز عبور باید حداقل ۸ حرف باشد.",
      passwordConfirmation: "تاییدیه رمز عبور باید با رمز عبور مطابقت داشته باشد."
    },
    register: "ثبت نام"
  }
};

const Register = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const checkUserExists = async (email) => {
    const response = await fetch(`http://localhost:3000/users?email=${email}`);
    const users = await response.json();
    return users.length > 0;
  };
  const navagation = useNavigate()

  const onSubmit = async (data) => {
    try {
      const userExists = await checkUserExists(data.email);
      if (userExists) {
        swal("کاربری با این ایمیل قبلاً ثبت نام کرده است")
             } else {
        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          swal("ثبت نام با موفقیت انجام شد")
          navagation("/login")
        } else {
          console.error("Failed to register user");
          swal("ثبت نام ناموفق بود")
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LayOUT>
      <div className="text-center pt-5 rtl bg-body-tertiary min-vh-100">
        <h1 className="h2 mt-2 pt-5">{translations.register.title}</h1>
        <p className="lead">{translations.register.introMessage}</p>
        <p className="lead">
          {translations.register.alreadyRegistered}
          <Link to="/login" className="me-2">
            {translations.register.signin}
          </Link>
        </p>

        <div className="card rtl mx-auto" style={{ maxWidth: "400px", marginBottom: "10rem" }}>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">{translations.register.firstName}</label>
                <input
                  {...register("firstName", { required: true })}
                  className={`form-control ${errors.firstName && "is-invalid"}`}
                />
                {errors.firstName && (
                  <p className="text-danger small fw-bolder mt-1">
                    {translations.register.validation.firstNameRequired}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">{translations.register.lastName}</label>
                <input
                  {...register("lastName", { required: true })}
                  className={`form-control ${errors.lastName && "is-invalid"}`}
                />
                {errors.lastName && (
                  <p className="text-danger small fw-bolder mt-1">
                    {translations.register.validation.lastNameRequired}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">{translations.register.email}</label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
                  })}
                  className={`form-control ${errors.email && "is-invalid"}`}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className="text-danger small fw-bolder mt-1">
                    {translations.register.validation.emailRequired}
                  </p>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="text-danger small fw-bolder mt-1">
                    {translations.register.validation.emailInvalid}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">{translations.register.password}</label>
                <input
                  {...register("password", { required: true, minLength: 8 })}
                  className={`form-control ${errors.password && "is-invalid"}`}
                  type="password"
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="text-danger small fw-bolder mt-1">
                    {translations.register.validation.passwordRequired}
                  </p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p className="text-danger small fw-bolder mt-1">
                    {translations.register.validation.passwordMinLength}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">{translations.register.confirmPassword}</label>
                <input
                  {...register("confirmPassword", {
                    required: true,
                    validate: value => value === getValues("password")
                  })}
                  className={`form-control ${errors.confirmPassword && "is-invalid"}`}
                  type="password"
                />
                {errors.confirmPassword && errors.confirmPassword.type === "required" && (
                  <p className="text-danger small fw-bolder mt-1">
                    {translations.register.validation.passwordRequired}
                  </p>
                )}
                {errors.confirmPassword && errors.confirmPassword.type === "validate" && (
                  <p className="text-danger small fw-bolder mt-1">
                    {translations.register.validation.passwordConfirmation}
                  </p>
                )}
              </div>
              <div className="text-center mt-3">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  {translations.register.register}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayOUT>
  );
};

export default Register;
