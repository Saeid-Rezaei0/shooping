import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="main d-flex justify-content-center  w-100">
            <main className="content d-flex  p-0" style={{marginTop: "12rem"}}>
                <div className="container d-flex flex-column">
                    <div className="row h-100">
                        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                            <div className="d-table-cell align-middle">
                                <div className="text-center">
                                    <h1 className="display-1 fw-bold text-info">
                                        404
                                    </h1>
                                    <p className="px-5 mb-5 " style={{width:"20rem" }}>صفحه مورد نظر یافت نشد</p>
                                    <p className="h6 fw-normal hight-2  mt-3 mb-4">
                                        صفحه ای که در جستجوی آن هستید وجود
                                       
                                       
                                        ندارد.{" "}
                                    </p>
                                    <Link
                                        to="/"
                                        className="btn hight-2 btn-primary text-white btn-lg"
                                    >
                                        بازگشت به صفحه اصلی
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NotFound;