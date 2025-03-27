# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUOZN45H%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T141156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrhhmSHuGghUnAYrFO8lEp8qghkcr2uMuLL%2FOummMNZgIgKa1ExcYxG0q9vqr9f3UQgxFHkSFwuewIAANEVfLNbcYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMU8ezcRm6h7vDXjDSrcAySMS1fJVC4LWnZHRqDnTT4hynUKdXrZXZNV8c5thjoNFWBk9aqWDHuNVsy7VvmjbU3DAfR2TihgSXuNUOh7CBQ1YB%2FSOkgiJou7%2FSJQ0G5yJxYW3XY6%2FTfS3x1zbXocZuOQgu7WAywhkLrWGEUGiGcLoPlOZiCQ5iHxqz9V0bPT5CVeAa7ZtCEZs3ad%2Bm6XkouWcqXOPb74rZWO7gWT%2Fz9RBs%2FUAQoZMuYxKCU86GOCKVfbyiy%2Fn%2BClpBoEgye8%2FgWHRdmebdztFKVtx2kOwxU9WMtN4MS5PgRQ%2BoAiuZfOXxnb0dUyi0jzV4S9HkBZSQ4aSYUnDBTFn7d7Bb0wFAO1Fo8YTRCB4iRP26%2FnO4otvBwYa%2Fxy7QI8hUxeKkE7r9F0YiDbnq2pwIUxaU0stNLmlU%2BxixHb77PyAPGm9x9qwnk%2F1X0Yf8Cf%2BwF07y0j34BkUYg8caVGmJZ8nWKEXuYFsQiWPWKbLA%2FdaTFv6ZbZI0hqZjUmsAOgXJ61taHf8qkPndWgCneRiUws9tgR2AXm%2FkUcTgURmi9Sq6JEiLz14VsFEGhIhDPyeRyndDqMXjaMtgTIg3585%2FS%2FCvNeJuCaOuQ7tvLKZJsmKnXLuJjc4uaGdyOsjGBTTf0IMPCwlb8GOqUBGPbwPoqFr73kKFaYMJqHRV49RgPySw%2BSLf3TLnKuYf68R%2B58Hlg%2FuIouKQZlyfaysR3%2FenCf1cql3HzBC%2BwDI5DoqVvUluRxdg3QSVIujwrV3Rt9uqrrpb0IeRr1gLinIYMNLnJpDbLKFhCoPhABMZWV3qfEVtbdnx8v1Tzol%2Bs%2BekiTDNKpZ7oP7dtbfhhPQLxaoJ22WrgqG%2BJcbGlFekkbm0lO&X-Amz-Signature=dbb250a620eb25bda07a567d003f3d3015ebc17c021d6d84f8599dedebd82d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGQCGWWY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T141156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELUZ1WsdYpzZEtep8Whb9%2BkQSy%2B7xf0kIaSSv62ViNVAiEAufqXKH5z2Wy%2B1UACtLn34vwbXCSkwD3KgGeO43ZYFtgq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDE5ymaHjVlt3iQcyPyrcAwbPIZlFro9bt3%2BQozqaVkNRSDzKWCx0X3AKWhgAg8PVQAgLiugsn38CLZPNWjzltVNo0OCiYroboCGn30%2BOQ9DK7LeHVowSA89wpnVUn2ZPsL8j8hbKd7qXf%2Bk5NPd%2Bsn3YdYEUGvtus8Sr2W78%2B1dOPfKrwDAquFJudtixrsZIdrpycL8kYAzgXlScPL8MrWFyuWuO0ftqNUom2SZ2Tw1kXPjQPFO2shv7ZG04pbet2R2dBsm3L%2FXkHlV9tkiABWnzjIH8vIt3A10GVHi1iNW0jS%2BK%2FjFRUeXq4GCdSAYHkkXQ6aNY7Rfj2b53emaOshZuSZ3WF4IBwXYxHIB3rEoGtbEpNOVIkZTXR%2BoKjwCI6D1G7sk7RQkPFiFG4L5E44HBBmrrEoxFtC8ofjTXjFyu9rvtNRS5bgKS3RDFdkOE0JqPeaZ4luV39EnXgo44p6kaZxVbxyzt%2Fmo4dTR5Z1ZAq6EUiuFpHcoo1S21rPxHZ%2FZGJ8PyljZ65V8QIGBxDbB6NOEwpQUXloVKtrzKzmaOpT5%2FssGDOJDhAlLzY%2BFU7PTkyyxYLmBNiMNByMtHieRlJwP3p2mww8urKFn6Y3e6%2FITnEIPFAIUyh3RoTp1TdbReWppPa2IZAcVBMMKylb8GOqUB0CAzETGN3vVdjCUZXcGOnkv2eyRDhc4FtvNSuihsVy%2BZoCg4UEK%2BI4upaY3o6PclXzZC98y1iJzcB%2BQqVRjt7XbWm2h7kIo0CMb5MG3kEPLX51dfKcHBw6eKgx1YCylKlG4F9dO1WM91kezYPwQGej7UfZ0%2FFJm6xZCXtVaTxfkq%2BytWWPBF6l%2BhEk%2FWyqMCje37VmXg1vlH0jiQuynfGM5EOCT7&X-Amz-Signature=448b09c96c9cebb340035cd3a4c59dfdbe921a2168505d8db0e868ca39e847be&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYZHQE67%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T141156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvak4MPxPSVeyVB%2Fad%2BRRSvSMGq1AV1rj8dBYJ3A6H9AiBL1REVvMss6Rmg0474RPCqJ9J3REfa0JqRzEcET9%2BcPyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM02YHQ%2BWt48VISUlyKtwDEWnw3WBvROZ86C0jZGHLYPHktfcwG0qxo%2FXvB%2B7XkJWAUuCKJQ1vJwxuMI8vWWuIYJh%2FAZK0Dyh3jB2tjIIYopow6ifAWYnkfzxFpo7S%2B%2BOIHIuteLuMCp9%2F2Rd%2FFBautxi1foMYpYi7%2B%2BgpLisyVZB22C0w0pK7k31%2FSCmPl%2FbxZpfT5msaeEnwXHsnKJ%2BXYVe7jTwRtriyYIgmFl4HmS2eCZVb0QahpLH2a1i6Mfe4P6w9iCMG5PqFY%2FF6NR0ljfrTBS7bYRPDAua1Xh8VDkw%2BcApZ7bDi0mA1JXYBLUfmqsnLSzkv6e75nru4DpEtTJrUWKXGjbonG43kgPhFKhc7P3GvuZc3Haw%2B%2FgOlKDFRHATZu4xDxJEw4WnssythsGISQX%2Bq9BW4Ebu6ibf2q9n6Xg51w8n2dyxmxcbBDuZbaabZZiPIg5JhGGooiYmrFZKCxBiuThEDAl7RHwrkVkgbcS4z9e62zpNuNpx2t96qJ8%2BBQy6HMte6Hk%2FE%2FwDiTr9EUlc348OmD2zJkc6XgzMWcpzIMtu%2FoeD63DJGZAcVEDdkoNWYaM0I%2F%2BFUwM6E21Gxs1rN4adcnCL9%2B9CRo0fT%2Ff9Qp1ANfAEFRU%2FiCqnyodCOcZ0KOYinYscwhrKVvwY6pgFOGqmn5Z71IN3JVzyhSPGhqCNY0S5dJx%2BuVG2VdcU5yq2uc%2BJdsilbARWswIpUewWiC1FCajvKaoXwPdYi%2BAs%2FvkWOHpcZz%2B5vFzH5WQh%2F3QR7zymJqnccv4ShqH46zyKsciZD3yL0vNxuZehOy4wMLTOCtmNrmdNaXkmGb7kUhPHJSFzukfQZ9gRezpHc8oE0P7ik%2BGOiBO7MqTfkRwxTXeV%2BEhA%2B&X-Amz-Signature=7c74510d37b97d4205af92e5082c2794b61756dac551829242208035a3cf6bd6&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBDVR7QD%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T141158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWdCkBcqeHeRNH4pUVm97lh50iu9ilVUBrDETeLUvmdAiAzUSMfNYHxl%2BnYl9IJ9imLRMxbJRjTzVc8VfO7tAlrQSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMkRmTpmEYBQd5wEI8KtwDxfJuVf2hcDjButf2hjrZDw3awYUeIel6pIoxIaKptqnyIuVVmsDThTkgxD93FHJQkp15kk0dKvJalB6I5mhJvwcre4BmalCcAUpeJcD%2FBQQyvrG%2FxyB127A7iEZg6Aid8vfX9sLrhP8aWVNczyD5e4L2Qqb2UbqbNqB%2BEuvxvqr42BBpPFfZGYEF%2BNLW0GFbJuKdO%2FaY581Y89txBurRK2bp19sa95R%2BpsHq1nxmoMq4hNw7eHEDSpGiTIYz8ComyTB971Llvh2DIy7DLyDc2rmayKt82ONh3D%2BynZpb1GORb7WXLQ4EizlZzF5P4%2B9Toy%2FUFzbAqI94ik2II1AJ8JjIJbYzoXV0gQHBl%2Ft2lgR9X4JX%2FHCq%2BPVh9ISl8FutZPDWwgPcC9HqbgRGC1RD%2F6gcZAhpREq4CY5NR1ZsZdV%2FNRmHwZUlqQENSf71s5HUt2Xo3XNIGE%2BQqwGAOoPt8T8FOWU8kB4U7SCvc7HenOdXK%2BSFWB7yqv31f1m3jKDqXw8zWiad5r%2BOzkgYB474irJXxMh46YergEsVhWnoB%2BT7qRkidlSw0p%2BjMw2imwdvgTQwoO5htrDKw3X2mvsulWcVdQ9P4As6zPjMNSklpQzOo6z9glJdhhJeegYw57CVvwY6pgFxkD6t9drXeHgbgjOTpGP9xJs27qNcVSjJqT7gvScVY2EOd0Rbm34PSUAmhYwkWNgNu73Po9CaeYsOUO60hbS3LUqX8dGcMwZiyfMHsv4ldTwWas654qP44i4NxZVKDvvZ5xh0WvQM2zB8CoxC%2BAFHx2uNSzs2QSfh80RxlzUBg35OiTVo8WwbulsCmdap8GfPaU1rFdHJPclXMQUa76wZpWNShejj&X-Amz-Signature=1f8a29c457f08a3a2e45b722d3cf6c90c97d6b3cebcd283129a9f8fc3e1a691c&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VUHKXI7%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHxd1cZZacSFr%2ByQplK8S3gG%2FUW4ABdJ8wHdHtGSs97ECIQCLPmGEw8El7CvxE2HZ7n8ti1Upf%2FapvdLGk6xNnrVWxyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMulFpi1YTQKJeo3a8KtwDCl50DnaAwIOQpxA8DtSwM20r0Fa2YYS7kDTc01yt7AkStK95RijBMI2aViAoB0PKdpd6lv%2Fr7Pawd8nG5YzqwxlNCzNnVa6pyjxssEJZJZKmMEwBF3mEn%2F1VplSzzGTJukmlZrscCDmK0TSpTTmVf4XHocXmH3cenryA1vW%2FkbCAzUzU8n3u%2Bbq5Z0yjTJ292wbf9O8AKw0OfnqBUcHggsBr74jjzhwBW9Rgq3yiWyoTFmcL%2Bet39apIqxn3OO2cqZAca2Z1FdlzlWNA2qMcfv8sqfz99RHGBr7obCG%2BOdkKVssaFpKcdKg6VEaxvBvj%2BSf3XqivWHvm2NbI%2Fh4Ld5X375FP5EfxcAOpSjXihKdm9M8YbyT8Facwk3%2BZOhMmVuNQsYsIX6nHk52rX60ahfr46ORgDjoKrjKvzaCM7MYZ5XyxvtUCTWEDkyYXlAkG0FNXJCH8V6MV5dWTfTkcmG4jc2vzoT00hu4ltMc5pMKRf5q%2B9tMbUuOvkUbVHMJWD8O8aNGeduYAwMTVrZnAiG6W3%2FJ2RbyDb2EBdcWcaohAtGFwlKallTE5Njj%2BuqFbHM5qBdEyXb1gFpcASciY29I8jxN9q%2FUo9A8d0lGEarIJDhVAmPbC51ldaFUw2bGVvwY6pgE%2FHCrOKwHEdRpDErQYFAQNcYykW4INySmCGhIavcf0GiIr3Ql1sjVBkks7LeifJQtNYlCt8LmMnAKXhYjkCjRZ4F1Yp1yus6qms%2FZv8zk6LnRtIxy%2Bboo5GBFiqgDXDthHWG2MQ0PBUxmApHWMADo1GsIUuh%2F6fnwFhUqLJDZQl%2F2Cs6QqUQLvswvO8GOD2IcwnaZpTDS5Y%2FgCs7mhKq%2F%2BD7Sorslw&X-Amz-Signature=5edb6fefc334ed036fa24df3b935a84c98e5b0c47d2b9409ca84e8658d17f787&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NSTR5EL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEIl99YyPsyIsjzNyx5tKJwfdwYRQWarvhRLWA%2Frqb6AiBFYe5ObER6fEWSqObfVDRXEF%2BCHnZpkBmgTh40rJdmGCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMJCAiPbizL2od44uHKtwD4rR3XVsU4uzSk4qMaRk7LDETmcqR%2FPc3u21CnsoGnFd7mkR%2FP7eQE%2FQz4DwkDweKrSsgQu8NC1UdtrXUWYMRVWvUeCUAfcXiLI0WRaeC%2BlgjUdJ7HRm%2FNX6cRf9EOe7kMRjIPdluEyNgFYOFUp946i%2BypjvAsRNSrmG8LPvz%2BabqAwIHNjom6o0lgxOYC0hVtix4QQOl04XcZrkKWxgabdRPBhkbT8Ip9U3cVs0y3L4py%2BCpxDVHVyUavVIVINgcvfW5kPkWM126gD9idphf7NUAX%2FxLpCpuDP%2BW0GFxSiyLB5qjLjFKRC4EQPX5kl3RbW3XkqXX8QgUuHqtFGiwMniirI0P2%2BAueM6tY8zVMCBJrS1uwVuCIbtYDyhgbtwVhN4g6lznAxHynn5kS%2F%2FYHoo1i6mxHpiQOvatvXUYtqrPLMcN6sQLX2OncNgbRzigeLKHz12TBszcmSu3BE%2FEbFZYPD%2BvUM2PGFgz7garGQX7gE10ZpjkCtBIWaJL8JEZbVgEwFZRbZ5DpDp75ZweZw85kb8LVNvAFN3N7czk6Kn7zGmmLnB%2B2wdRJjjfQaZ09gs7bNCHZW9va4URSX2pOKV3%2BNDjClm%2B5KdrwmffHy5uuQhSfDnF22zSjLgw%2F7CVvwY6pgH40hiwhId%2BMd2axcYUX9MIkimq6GnAxC0fZUBJT77dqBIHYAVHlLYc1EfaZ5a9pHZ99L76Zh%2Fc5ISWJbGhtNF9RyONetVuiKYPHlKubb31cFxxPB4uCxoUq%2FaKcjF3Dtxkk9f45MtoovA0L01UnJuurVCG%2F%2FQgy9mT6LAg7nna7BidBvA4R5hEO4f7Vj%2Fd7EeQpzOBcI02AdQBhxa9GRKxSMKFhFie&X-Amz-Signature=47e6854fa31ec9127390ae729398397d6cb8775ed78d772ede454290eb2634b2&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466226G5OP7%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T141159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf76iW7MHnLzvns3u9UMOvZSospDTirUNZbTWx%2F9XmOgIgMnL2COYFt7Eztu%2BZs2rmVq9fE70nW7e9mFB99KLMgBcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJWOMc14DHboiJ4qJSrcA2E3lHM1oDZE4gaP4hz5pLJLuANZr8y9VuvEERayDTY%2B9UnA3S%2FOiwQT1%2FOAKQgJyNXUS6WIKDJB57DHdE%2BnXSvDPUgphG%2BiOpS0w1XO3ztVdZKHL26UcZ9QZRb%2FRLfk87%2BP79qUunfAvEUqL9S%2BJjWYRJl4y9B30CYGqa2zw2QJ3MaK8hglUskyFFiA1OzjKFWfaKfjHLPW7irRhX4BZbdBfpvuODgz8JuvN%2BZY6l3xAZV7pYuyZXqV%2BDE3hKbkJUiSPHbcLs7sIU22c%2B3yNsft7yZ7UyhJJT8%2Fe0%2FU%2Fhc3%2BItvAsIx3GEZ%2FwmWr%2B7ogkatE3uQoYOZ5hxaTEciUMmgkpXkhu%2BntspOaOXrxVJj80FvO2XkB4xbzDDQEFhZ9Ax1A%2F%2FmBmSEh9cmhiXq0Yayc9JpyPXFQFa3vPwHg3YQEzYirqpiHlXu992Drnz%2FH5gAOD9mVsIpVDhBEgDKu0sjiy2AJo8wVV4zteBbs7bzNVOERe56db%2FQgdU0Bg4TYPtpo2ksRabNfrZ9k4RUyiB%2FXRkdTeX5fifQRURca1Xo48p6mhqgKyZK2C1ZvrI0Yy0F50YvVKe8lJ9%2Fh6JNNhux0yuRAHp03qJwGgjHP4ajdDmTbB%2BjcPl2ozBcMIWxlb8GOqUBDKZS6%2FWjhFQ407qWqE9STEM6SUMSA6eTL9dtUS5QdAKf%2BblCbm5lSrjQ4VSev6XbTmBi7iR1LjB4wrPIJbdZezVLOP7kGsanERUt60uEa24BQNdNOOt1TRXS7UKFoeXhFAvMgXI5%2B862Y%2BbDOhXxzCwYcTXFvvyF7tc80KjcO6sL4CrB216LuuL%2FZW%2BRtOhtRmxQsr2LR0EMDKp%2F%2BiktdnhnL8QL&X-Amz-Signature=fe815419596a978f9b8a8791fb545d878cfc61965f40b9f5cfd25feb9f242638&X-Amz-SignedHeaders=host&x-id=GetObject)

11. 클러스터에서 nginx chart release happy-browse를 제거

    ```yaml
    helm uninstall happy-browse
    ```

12. 클러스터에서 Hashicorp helm repository 제거

    ```yaml
    helm repo remove hashicorp
    ```


## Lab:upgrading a helm chart

1. 클러스터에 bitnami helm repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

2. 현재 클러스터 내에 nginx의  release 수
3. 클러스터에 존재하는 nginx의 수정본 수 ➡️ 3
4. 클러스터에서 현재 실행 중인 nginx의 version

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AI6OC5Z%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T141205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCD2Ex%2Fntq5hIWon5FEkZ3xaIBqBsi2r3DZSIwJIgMEAiAY2idADiipMm%2F1yVIwD7lMf%2BrG2zTKE69RUc4R1KhCzSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMG4rJJH5WWiM0kl3WKtwDX93Ql1HQiwkaBHIMLXbCMxOhkx4ipmt2OaJ08h50qkZ8RYqY0P5bc7Mxvx9od6xX3sKF%2FtEntX1%2FRsG8A5x8Qh0U8BCfbnrEFNZR24kkJFayU7KbLOZlFDk1LtBUo3HP7hfEWL2LLjPHXJ%2BfcbKUA5GSrFwAS02oE5yNfK8G7Wgy8hZhqCPQp44C2y5KcdH2BhfIEYQHKwan%2Bi6ahKo8CGtDazt8IQzLZu1O7HPfmAjLudqG3mCSZ4mnSsDgga9816XPDnNbjFM6g0vhrA6PoJBjhxCxof5D8Vpx%2BkuzBfAt1oNiQhzFOkfF7BwotrY6aQwa0T42u1a1dZnLTwbETEiHvaxjCZyvATGSxyJvJrmIf%2FVgm8W%2FQeRmCXsMsI7H7WRzUCT6kTbSVNetgLvAQdN4zXhQQSlmPR2HEXLXr3fFoG8VaPJNxPqB5kdwULL0eOt6PxYch%2B6PTalotJOHFPBGDj0ihGFy27CC4tv7jBSYKjS6bY1%2FeOXndUaxEoscuUZpiBKCgauwHQ%2BQzFdSwxgZFhmuv4TZWiRld0nn0aaj%2Fl0KUPQ6AhRBx8uAmDesXdl2cPanOLDR4muvTyEjlU3Z0BwcIv%2FD5E5QEr34lp7UoEVdapw9pXb89n8w17GVvwY6pgHjVtCAVFt5ODztDW3pZqrvT4RiQHaAKTaCWIUEzKgd%2BJSVBlnfm%2B9fUvoq44lrgMBzuaFOZHN9erb2Vy9BXj2xRs9hvUvROi8Gzd1pQJLJSeVT5%2BzVfvfAHl1RBuplGvk1WO9pkR5fZcPahpus02XF%2BVyYWZZQ8fGLV183jXz2aDYCdSKM5p%2FRKH5e5pQ67CaWimzVyO0a8mL5sJcGPp%2BZInRyfRmd&X-Amz-Signature=18b661ea382a6d34eb6faec69a88fa32c614a52f59d1f3facbe4c2ce1aae6b25&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C5OAZTL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T141205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQSc9iMgEr7sG5%2BZgy9ITodJO0kygEe77Qzu446HqNsAiBpcF7FbPE0eJhXPbq4qxEf4ELkqX758qiDaQlmaAC2%2Fir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMlCDQ2%2BkV6TtFj2J6KtwDf%2BqvV2cSYz9dmZcGlkLxECUR9xX5CWaLNQOXMCKTvq%2FpZJ%2Bon8pt8inNl6K8igFY5RFiAeg50w6%2FFjvNMvvWL2SyJNAtDRZv4YnSLmzFxSdKPQc6BtNC4CUoI4wXxQP8%2FdH25xTHJjTH4fo9FvM7oFF8ckwLx%2FQf2Niutxsi41Xejw0h%2F7HjV267z9FsyNRonIYusOi%2FZfFr5lQlZ0flJheyxa3zpgdy%2FG37A6Z3koRyE00%2FPXKoxs2ilsbqPMf7icGgfQfCsFuc2AtbB6kxiU7wh2gSYIlWbxOFAZ71CvrM9%2Bja4Y5QaGHKgyT99VkF%2FQM6g%2BMDbXUEm1llmlQ0HDbBbGzaKhBj5SEM9Eg7Qtyo6p3wR%2BgBr300rpri0i7%2FPEzBM8621k6cauOAVZEOkFaUiy8JFG9MbdVrIVyLKXCVDjjKn%2BxfTpxqKJLx7OK68INKS%2Fcdlj8cWgMidKh3Tb2xrBhtC34Fk4kzACQWJyTDg%2FxugLtSY0Sh7YRXMfuajsqKYm5VbTdygQnm%2F7fqGphuvV64zHUbvb55nIhTVHkOhm6aNTYDQ89WQimgP7nlVkAaMJ%2B3xB26GDrVcDu%2BBB5lVFifRh1Uxpf%2BNyq1lMCGKUxHObrEFWTUg%2FIw%2B7GVvwY6pgEgPyH7nIzYkKUGihbfbCVKnRnYSyvw4VaFjAui%2BZwi8inQFO05D1a6kVsTYDZZBPnCQ2gZQF8MaZyAlVMkpwOqIv2b4YH3SU8%2BZ6CSTpg94juLwCmRPYnP2qTToOuhHgFunWot%2BQC0bhoVbY69KQPh4bk9uCgu5QU2Uv64JPb87T%2BcMkVdgpA0l6QTX57xDFNvFxQVNglmA6VdhxeDC8By23MU2PH1&X-Amz-Signature=ff30135da046d2ef33950d8cb1e683233dff8b622f877ea85577aa7a566d62bb&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

