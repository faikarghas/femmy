export const toSlug  = (title:String) => {
    return title.toLocaleLowerCase().split(' ').join('-')
}