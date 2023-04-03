import Products from "../models/products";

import joi from "joi";
import category from "../models/category";

const productSchema = joi.object({
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

export const getAll = async (req, res) => {
    try {

        const product = await Products.find(req.body);
        return res.status(201).json({
            message: "Lấy danh sách thành công",
            product
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Có lỗi xảy ra khi lấy danh sách sản phẩm"
        });
    }

};

export const get = async (req, res) => {
    try {

        const product = await Products.findById(req.params.id);
        return res.status(201).json({
            message: "Lấy chi tiết sản phẩm thành công",
            product
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Có lỗi xảy ra khi lấy chi tiết sản phẩm"
        });
    }

};

export const update = async (req, res) => {
    try {


        const product = await Products.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });


        if (!product) {
            return res.json({
                message: "Cập nhật ko thành công",
            });
        }
        return res.json({
            message: "Cập nhật thành công",
            product,
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Có lỗi xảy ra khi cập nhật sản phẩm"
        });
    }

};

export const remove = async (req, res) => {
    try {


        const product = await Products.findByIdAndDelete(req.params.id);

        return res.json({
            message: "Xóa thành công",
            product,
        })

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Có lỗi xảy ra xóa sản phẩm"
        });
    }

};