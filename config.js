/**
 * Created by Gili Belz on 25/02/2017.
 */
const env = process.env;

export const nodeEnv= env.NODE_ENV || 'development'

export const test_func= function (message) {
    console.info();
    console.info(message);
    console.info();

}

export default{
    port: env.PORT || 8080
};