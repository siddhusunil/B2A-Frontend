import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { server } from "../main";

const CourseContext = createContext();


export const CourseContextProvider = ({ children }) => {

    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState(null);
    const [mycourse, setMyCourse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    async function fetchCourses() {
        try {
            const { data } = await axios.get(`${server}/api/course/all`);

            setCourses(data.courses);
        } catch (error) {
            setError(error);
            console.log(error);
        } finally{
            setLoading(false);
        }
    };

    async function fetchCourse(id) {
        try {
            const { data } = await axios.get(`${server}/api/course/${id}`);
            setCourse(data.course);
        } catch (error) {
            setError(error);
            console.log(error);
        }
    };

    async function fetchMyCourse(params) {
        try {
            const { data } = await axios.get(`${server}/api/mycourse`,{
                headers:{
                    token: localStorage.getItem("token"),
                },
                params: params,
            });

            setMyCourse(data.courses);
        } catch (error) {
            setError(error);
            console.log(error);
        }
    };


    useEffect(() => {
        fetchCourses();
        fetchMyCourse();
    }, []);
    return (
    <CourseContext.Provider value={{courses, fetchCourses, fetchCourse, course, mycourse, fetchMyCourse}}>
        { children }
    </CourseContext.Provider>);
};

export const CourseData = () => useContext(CourseContext);