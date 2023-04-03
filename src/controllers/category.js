import category from "../models/category";


const categorySchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    disc: joi.string().required(),
    status: joi.boolean().required(),
    quality: joi.number().required(),
    categoryId: joi.string().required(),
});


export const create = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) {
            return res.json({
                message: error.details[0].message
            })
        }

        const product = await Products.create(req.body);
        return res.status(201).json({
            message: "Tạo sản phẩm thành công",
            product
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Có lỗi xảy ra khi tạo sản phẩm"
        });
    }

};