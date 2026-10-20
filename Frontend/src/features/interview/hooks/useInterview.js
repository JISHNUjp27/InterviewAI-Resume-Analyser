import {getAllInterviewReports, generateInterviewReport, getInterviewReportById, generateResumePdf} from "../services/interview.api"
import { useContext, useEffect } from "react"
import { interviewContext } from "../interview.context"
import { useParams } from "react-router"

export const useInterview = () => {
    const context = useContext(interviewContext)
    const { interviewId } = useParams()

    if (!context) {
        throw new Error("useInterview must be used with an InterviewProvider")
    }

    const {loading, setLoading, report, setReport, reports, setReports} = context

    const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
        setLoading(true)
        let response = null
        try {
            response = await generateInterviewReport({ jobDescription, selfDescription, resumeFile })
            if (response && response.interviewReport) {
                setReport(response.interviewReport)
                return response.interviewReport
            } else {
                console.error("Invalid response format:", response)
                return null
            }
        } catch (error) {
            console.error("Generate report error:", error)
            return null
        } finally {
            setLoading(false)
        }
    }

    const getReportById = async (interviewId) => {
        setLoading(true)
        let response = null
        try {
             response = await getInterviewReportById(interviewId)
            setReport(response.interviewReport)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
        return response.interviewReport
    }

    const getReports = async () => {
        let response = null
        setLoading(true)
        try {
             response = await getAllInterviewReports()
            setReports(response.interviewReports)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }

        return response.interviewReports
    }

    const getResumePdf = async (interviewReportId) => {
        setLoading(true)
        let response = null
        try {
            response = await generateResumePdf({ interviewReportId })
            const url = window.URL.createObjectURL(new Blob([response], { type: "application/pdf" }))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", `resume_${interviewReportId}.pdf`)
            document.body.appendChild(link)
            link.click()
            link.remove()
            window.URL.revokeObjectURL(url)
        } catch (error) {
            console.error("Resume download error:", error)
            alert("Failed to download resume. The resume may not be available for this report.")
        } finally {
            setLoading(false)
        }
    }

useEffect(() => {
    if (interviewId) {
        getReportById(interviewId)
    } else {
        getReports()
    }
}, [interviewId])
    return{loading, report, reports, generateReport, getReportById, getReports, getResumePdf}
}