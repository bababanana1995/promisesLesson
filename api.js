const api = {
    sendStudentsCountToItKamasutra(studentsCount) {
        return axios.post("https://it-kamasutra.com/students-need", 
        { count: studentsCount });
    },
    getVacanciesCountFromMicrosoft() {
        let pr1 = axios.get("https://microsoft.com");
        let pr2 = pr1.then(res=>res.data.vacancies)
      return pr2
    },
    getVacanciesCountFromGoogle() {
        return axios.get("https://google.com").then(res=>res.data.vacancies);
    }
}
