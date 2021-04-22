const PaginationUtil = {
    isNextCheck(pageCount: number, currenPage: number, pageSize: number) {
        if((Math.floor(pageCount/pageSize)) < currenPage) {
            return true
        }

        return false
    }
}

export default PaginationUtil