const FormComponent = () =>{
    return(
        <div>
            <form>
                <div className="form-control">
                    <label >ชื่อรายการ</label>
                    <input type="text" placeholder="ระบบชื่อรายการของคุณ"></input>
                </div>
                <div className="form-control">
                    <label >ชื่อรายการ</label>
                    <input type="text" placeholder="ระบบชื่อรายการของคุณ"></input>
                </div>
                <div>
                <button type="submit">เพิ่มข้อมูล</button>

                </div>
            </form>
        </div>

    )


}

export default FormComponent