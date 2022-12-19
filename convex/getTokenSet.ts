import { query } from "./_generated/server";

export default query(async ({ db }) => {

    const tokenSet = await db
        .query("designTokens")
        .first();
    return tokenSet;
});
