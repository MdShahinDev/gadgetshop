export class LinkGenerator{
    static generateProductLink(productName){
        if (!productName) {
            return '';
        }
        else{
            return productName.toLowerCase().replaceAll(' ','-');
        }
    }
    static generateCategoryLink(categoryName){
        if (!categoryName) {
            return '';
        }
        else{
            return `/category/${categoryName.toLowerCase().replaceAll(' ','-')}`;
        }
    }
}