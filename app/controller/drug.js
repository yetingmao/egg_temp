/*
 * @Date: 2020-12-11 06:42:09
 * @LastEditors: yetm
 * @LastEditTime: 2020-12-12 04:11:00
 * @FilePath: /egg_temp/app/controller/drug.js
 */
const Controller = require('egg').Controller;

function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
}

class DrugController extends Controller {
    async index() {
        const ctx = this.ctx;
        const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
        ctx.body = await ctx.model.Drug.findAll(query);
    }

    async show() {
        const ctx = this.ctx;
        ctx.body = await ctx.model.Drug.findByPk(toInt(ctx.params.id));
    }

    async create() {
        const ctx = this.ctx;
        const { name, number, cost, sale, type } = ctx.request.body;
        const drug = await ctx.model.Drug.create({ name, number, cost, sale, type });
        ctx.status = 201;
        ctx.body = drug;
    }

    async update() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.id);
        const drug = await ctx.model.Drug.findByPk(id);
        if (!drug) {
            ctx.status = 404;
            return;
        }

        const { ame, number, cost, sale, type } = ctx.request.body;
        await drug.update({ ame, number, cost, sale, type });
        ctx.body = drug;
    }

    async destroy() {
        const ctx = this.ctx;
        const id = toInt(ctx.params.id);
        const drug = await ctx.model.Drug.findByPk(id);
        if (!drug) {
            ctx.status = 404;
            return;
        }

        await drug.destroy();
        ctx.status = 200;
    }
}

module.exports = DrugController;