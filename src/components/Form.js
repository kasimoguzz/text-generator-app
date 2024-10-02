import { useState } from "react";
import { useDispatch } from "react-redux";
import { getParafAsync } from "../redux/App/AppSlice";

function Form() {
    const dispatch = useDispatch();
    const [number, setNumber] = useState(4);
    const [format, setFormat] = useState("YES");

    const handleNumberChange = (e) => {
        const newNumber = e.target.value;
        setNumber(newNumber);
        dispatch(getParafAsync({ number: newNumber, format })); // number kullanıldı
    };

    const handleFormatChange = (e) => {
        const newFormat = e.target.value;
        setFormat(newFormat);
        dispatch(getParafAsync({ number, format: newFormat })); // format güncellendi
    };

    return (
        <div className="form-box">
            <div className="number">
                <label htmlFor="number">Paragraphs</label>
                <br />
                <input
                    type="number"
                    name="number"
                    value={number}
                    onChange={handleNumberChange}
                    min="1" // Negatif değerlerin önüne geçmek için
                />
            </div>
            <div className="html-box">
                <label htmlFor="html">Include HTML</label>
                <br />
                <select name="html" value={format} onChange={handleFormatChange}>
                    <option value="html">YES</option>
                    <option value="text">NO</option>
                </select>
            </div>
        </div>
    );
}

export default Form;
