import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import LayOUT from "./LayOUT";
import swal from "sweetalert";

const translations = {
  login: {
    title: "",
    introMessage: "به وب سایت فروشگاهی ما خوش آمدید. لطفاً وارد شوید تا ادامه دهید.",
    areNotRegistered: "هنوز ثبت نام نکرده‌اید؟",
    register: "اینجا ثبت نام کنید",
    email: "ایمیل",
    password: "رمز عبور",
    validation: {
      emailRequired: "وارد کردن ایمیل الزامی است.",
      emailInvalid: "ایمیل وارد شده معتبر نیست.",
      passwordRequired: "رمز عبور الزامی است."
    },
    signin: "ورود",
    signingin: "در حال ورود..."
  }
};

const Login = () => {
  scroll(0,0)
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();

      const user = users.find((user) => user.email === data.email && user.password === data.password);

      if (user) {
        swal({
          title: "ورود با موفقیت انجام شد",
          icon: "success"
        });
        
        localStorage.setItem('userEmail', data.email);

        // هدایت به صفحه مورد نظر بعد از ورود موفقیت‌آمیز
        navigate('/');
      } else {
        swal("ایمیل یا رمز عبور اشتباه است.").then(() => {
          reset(); // پاک کردن مقادیر اینپوت
        });
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <LayOUT>
      <div className="text-center rtl bg-body-tertiary min-vh-100 pading100rem-custom">
        <h1 className="h2">{translations.login.title}</h1>
        <p className="lead">{translations.login.introMessage}</p>
        <p className="lead hight-2 pt-3">
          {translations.login.areNotRegistered}
          <Link to="/register" className="me-2">
            {translations.login.register}
          </Link>
        </p>
      </div>

      <div className="card rtl mx-auto margintop--2rem" style={{ maxWidth: "400px", marginTop: "-25rem"}}>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">{translations.login.email}</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
                })}
                className={`form-control ${errors.email && "is-invalid"}`}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="text-danger small fw-bolder mt-1">
                  {translations.login.validation.emailRequired}
                </p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="text-danger small fw-bolder mt-1">
                  {translations.login.validation.emailInvalid}
                </p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">{translations.login.password}</label>
              <input
                {...register("password", { required: true })}
                className={`form-control ${errors.password && "is-invalid"}`}
                type="password"
              />
              {errors.password && errors.password.type === "required" && (
                <p className="text-danger small fw-bolder mt-1">
                  {translations.login.validation.passwordRequired}
                </p>
              )}
            </div>
            <div className="text-center mt-3">
              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                {translations.login.signin}
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayOUT>
  );
};

export default Login;
