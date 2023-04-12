const AddtoDb = id => {
let ApplyingJob = {}

const AppliedJob = localStorage.getItem('AppliedJob')
if(AppliedJob){
    ApplyingJob = JSON.parse(AppliedJob)
}

const quantity = ApplyingJob[id]
if(quantity){
window.alert("Already Applied")
}
else{
ApplyingJob[id] = 1
}
localStorage.setItem('AppliedJob', JSON.stringify(ApplyingJob))
}

const getAppliedJob = () => {
    let ApplyingJob = {}

    const AppliedJobs = localStorage.getItem('AppliedJob')
    if(AppliedJobs){
        ApplyingJob = JSON.parse(AppliedJobs)
    }
    return ApplyingJob
}



export {AddtoDb, getAppliedJob}