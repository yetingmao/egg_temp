/*
 * @Date: 2020-12-11 06:42:09
 * @LastEditors: yetm
 * @LastEditTime: 2020-12-11 06:44:20
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
        console.log(ctx.model.Drug)
        ctx.body = await ctx.model.Drug.findAll(query);
    }

    async show() {
        const ctx = this.ctx;
        ctx.body = await ctx.model.Drug.findByPk(toInt(ctx.params.id));
    }

    async create() {
        const ctx = this.ctx;
        const { name, age } = ctx.request.body;
        const drug = await ctx.model.Drug.create({ name, age });
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

        const { name, age } = ctx.request.body;
        await drug.update({ name, age });
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