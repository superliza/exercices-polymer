const finalGrade = (examScore, numberProjects) => {
    if (examScore > 90 || numberProjects > 10) {
        return 100;
    } else if (examScore > 75 && numberProjects >= 5) {
        return 90;
    } else if (examScore > 50 && numberProjects >= 2) {
        return 75;
    } else {
        return 0;
    }
}

console.log(finalGrade(75, 6));
