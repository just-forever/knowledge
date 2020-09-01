# session cookie

## session

session：由于HTTP协议是无状态的协议，所以服务端需要记录用户的状态时，就需要用到某种机制来具体识别是哪个用户，这个机制就是session.服务端要为特定的用户，创建特定的session，用来标志这个用户，并且跟踪用户。
Session 是在服务端保存的一个数据结构，用来跟踪用户的状态，这个数据可以保存在集群、内存、数据库或者文件中、

## cookie

cookie：是客户端保存用户信息的一种机制，用来记录用户的一些信息，也是实现session的一种方式。
实现session的一种方式，怎么解释？(这个实现方式可以这样理解，session创建的sessionID在cookie中，然后用到了set-cookie字段，带给了服务器，所以是其中的一种方式。)
因为还可以禁用cookie，那么还可以用其他方式进行存储，比如，放在url中。带参数传递过去。

## token

token，由uid + time + sign[+固定参数]，
是一种无状态的服务端认证方式，就是服务端并不会保存身份认证相关的数据。

token一般存放在localStorage，cookie，或者sessionStorage中，在服务器一般存在于数据库中。

token与cookie 类似，当时客户端从服务端获取token之后，是放在headers中，服务端filter过滤器校验。

## token可以抵抗crsf, cookie + session不行。
