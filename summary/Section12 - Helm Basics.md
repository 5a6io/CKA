# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVHFXGKS%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T141031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDzxXgWGO8IsqlkZM5NGVExZGbxIydJ4zdLctW8Sve3bQIhANla7sPWoEO4n9Q%2F036wjKAYn6iWzgawdZYbydQ4%2FyYLKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL3g%2FmFKUOs6UB5M4q3APfAf%2BvKVvNucVPaSy601LM7wR6QzMIUBJyJ%2FlWyocxH1vSNX24rhhJgJSZc%2F24sElmmrNzISiRgzQTAfxqlIaIBW%2F5ItePlVd7%2BD3mLE%2Fo8rG4HudjptCG1kkUMTfjNGc7wvQS5vnXo35W1BaikbTSP3acRyrBB3q8CwfrxZc9nOw2cvcKYifBpcQdQ5RIs%2FN7RhM9ZYKtxwXdbPHKz92BE4eZlg9CngUN1tbD4YYP4GMwXD2SkBWgz9M6vj4gE%2FqRhM6pzvokBpgd32GjOsbycUS2Fq8gzZuKZMgASEZ3aM0cbtqN1qJenayLFjHxujHAjwUm9Zs2S4kOhuf0ddTxvfRvWVToPOv5qGFg0nA7skL1DZFDwYrVS23sDl%2Fv9kY6XplREvLVTR3r3QvknZHxbncI5mrPzf1GXg35hhi4m9LBpNtJqKA3jF4k1ig4o2IkBu6j7Zws4GI7OQ0tkw9Zpxdyfm9M2bqkWGOl2Z1JRw5KjbL%2BqWMXVK%2FHefGPTbDFLIq4EjxhgFhae493pK5ITCK0qhVOSRUKAHP43o%2FIxd0sezN5OSovH1Cc1veDlIauZeV8SDCKwBfftwmRwmjil3ZGCBgKmadKB3CDk5fvfujH6ZAx2DIrLHdIMDDboqq%2FBjqkASreI96Qrn9rokD9UphovAO9Jrw7inx2nAZ5ARn%2BNkVWC2JGxWG4TLdvd8NH%2F93m7zmQzBH%2BmJxv2Q2%2BgbIb6U00mRppFNuCkBzovgh%2F47PT0h4QKTHJqEGH1niro4H6XM3COvjD7pnPbQZaEr3YZ2mQRQlXiPHjnAq5Aj1zMFw7T93Xwui1xvhfP7VcwfsAuExDO3qJnPttUK%2F1vCfnNba9NQQw&X-Amz-Signature=53aa218778de59125ea66e41589d3faddb213acae9b5869da9107116d49eedb3&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMARST4U%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T141031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC9uJRdPaCUmrC4bg4TxL%2BhQy3r7PZgJtB67korAb5cywIhAMUSsPgrfmvfM1nlYzdXS42kIy9%2B8LXMQT6l4oqn%2BhgHKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwbcmwn5O07KrRW6bAq3ANcJUdWpkL4ck2WdfHzx0YZK6eUfXysOt0OBeO6yh0ZlZOZyRAQAuQH0qmciMcbJMBMzXu83avv5k9cMJNwDkboITJrfQxtcjTCliOm4Qt%2Fi%2FUIbCeH7koRmwtwp41czDQKlWvGlclOcNO0DqEnDg8o%2B0UHNUvxvgPBGOujbiGxkmbT6F0FvmVa4yHS4jy9Ts8RS8RskWJjuZPRjo7gWA8AAzf5J2wH0MFWNBVjz6sv00G7RYdHqA%2FijVESLu10KRlG9eQEdp2XJLsQkp463wO9Hyfn2CFqnuvq8mgjUlenGaXE6wOfXqBDQvBLXuIW8WF84pxX%2BFF8TkD87w9b7AoQB1iC7akUIAVfO8%2FquCRocC8v%2FOZJcvVS25CWJo08Ca86nm8fQdv4GfMcNR4VL6o9cSpWu87vcvut9onyjKvn44sT8bb0ciIE0%2B89ilbgfxiEnvRcf%2Bl3lENmsWOsZ%2FxoRYmmXXqWp1jEUs5SCPIBn1hAFvNALhp7BA%2BHIi30Cc5x7QtYuI9cjgVXr6yBjDQm8NF6PVZu1GbUF8fwk6ZsJxunv4SXjVFzkQwbUBJL7Pf73bDUn%2FQtIY%2FzjOp40RefD7MXYLI%2BJe6IoiNaflZD6Uv2ydLagqxROg20DzDxoaq%2FBjqkAVCvhL8GG3oaBfOIn9DLtbsS80YuS054KYCqJfpEcsNFtkW%2BJwqpGEJy7w9WZvMav1IPhcDn5VRN7gl%2BnoGZi5VsabYJC6Zh13oPZWet1dzHn5d9ZgP%2BoAjHlS32bdC%2BQqqiQWo%2FrBShH8E96NHQ%2Bxlho71GivPPv0Y5nGiKVXIZPP57IkLnjTiYdAinWm%2FIxEmm5ZhAYSBJzZDZxgArWBg7vpAf&X-Amz-Signature=980192d51f8d33b6dcac48df7b28274a4ede37cb277569f56ee5007943a00d66&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBEOO7GL%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T141032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIAxlvReR15JH2mlF0mBpNsow4%2BSgxp1ZnUQ3uxMW91G3AiA9nGvCG6uvVqsOOPQk9mv2CHiCp2%2BpoY5%2FWU4hWUZVsCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlIklp5nfEQ38kTGBKtwDksSnd2o%2Bh2e2503u9QESUX5Wt9sGZDd3CRdilhUm0v4ERwdKWm%2Ft7cQfkCbHJvYvN3VOgHjt%2B%2BpxxX5LpWRbjSxKfF62WNtbYx%2BJD91UPRVxaYwGvniljLrlE2U6wEJtDXCUiRTnJac2BvIcSH8qwG8Xte%2FUxgNzoRlTSV8KuZWtrSLCvur%2Bbq%2F9W%2B8%2BCAkhI85D7XOwYZXcwpEU8xUE6YXO%2B1Hv%2FunvXLXhQgqKla2NDrbcpQJZCLbzZdXC7ZffDrF%2FSDmEgen54%2Bdt4SXIIq8%2B1og%2F0GHn9cNQ9cTNSAbmZMg3i328qAoXlbNSQ5PsPId24rxybF6k9cMRy1stGgdfXFWN430eh72%2FwbaDodDs48pSx3D1DLP1OMXXHEPT2f7rZqWaEYVaI8nqR3PLaD7NC8xRqFl54Mmwe302Oe28sjietvLqDRiDqjXVM3uA1U%2BYtF6%2BPAoiTmeyShml05MhD%2B5vQox5kVt%2F6xiIQSaPl%2BzHHIXmp1ryvB0%2F3v9hH1CGxWgS9GMH%2F6N6Z43m3b1uMqP1j98%2BKFGH4Jp3roTLecpm1fxE4Vmww%2BD96hb%2B0lxw8WLcSi6k7n9%2FTrF8LMIE0G6ufCidkRnLHFAz3gw1lj92CB6OmEV79t8wjqKqvwY6pgE2sSA%2FPhnYjQLtg4kxUtB1bXcg4C%2BMTzXEFKrqQsQRhmm22KKdQgsYUlfSE9H9isowOQMH2LS09639%2FxN3h52i42M5SDvzCNxJh8VeqbhFu07HZElbkK0SbujHqYWXd4%2F2ZzsXRK7cbFM2jeAZzj0cs0dBDUEF5ZT%2BQ5kW873aKs%2BqKmUTjl5rH%2BGlUvIEyp3j2MJarf9tEE%2BUCxpcA%2F2XqH9IGTXy&X-Amz-Signature=30d163068d45383b440c54635f674412800abbeff835d8c72f3442104b393203&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSJM7TSQ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T141033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIGBYh2vV66m6RL29VeTFCsqoTob8UpADThm4P3vfv7fGAiB1lxZ9slrltU6WnW2O%2BEBgNjU3hlbjNTNwSH%2BfqKD79CqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfOXzxhFmYKrQ%2B5RyKtwDA4THYurSimUm9lLIaepV2lGbz7zDjt0p9MoNysx5geOidONm9hoVTYAlux4iXKz2vpF%2B358Jt6YPRdreR1psIwYCiONfhY7RxF7X5N4um6bwPipPyFxUpoMOoIJakr8amndUBDXF81Z6p3bzRVg%2FfeIrHjPcbstrTnsZCANLnocCSD0uTneoDMbjvk1SZcV%2BSYtSAOk1u9Wl1H%2BaQLXV%2Fynv9ralGXR07jksyUhYpmgiTAJJiCsDJM4pYDH22JC7ZnTI%2F6TJD129mLy4Kw%2BXNKz9hSa%2BiRRw34aOcuMRtycsQVdAbVrouvyxtUMQu0H7hQqFL4fOnga5fP3Rx%2Fzqoqj8XKEA9l34U%2FN9%2B1Qlnj7k%2Br7%2BEl6vuVWDv1m6VfyFGpgvNGF1fz0eYVMVP0jrphxQrgN2L9ALYXo8gstFvOj5LQD47LMkTojBhY3UfNvWIBhEhBQPP1oQI0N8LBHH3YHFX781s%2BrpCI5s%2BLFXSsV8awQOQU2pi8p3HpOYM2fi2gdNTYnWcR22Do1FcKFjLk5M1PDStLJ9BzN%2BzbtMguEfcMdwS%2BLjfw4N28qoWlHNZldUwsS5TgUayhFOWckn9%2B7rYoK5n6P2HPCZ7yAie%2B%2BV6MXt3hDzoItKGkswjqKqvwY6pgHwXodKgElYlygBhUvVA8Flu1JrXnDXQHGgVROjKtPKFqLVo8Cp34lQcNJJ6tgT%2B2SZIu4GXr%2Fw%2Fsf7kJrCn1KA3chqtbccKGYZSzscMEuHcfFAJPM4yFSytMp3vEVN7peZqRFfBt3m0oT4wpCk%2FNzHXCTfLnJMgLCsegp68WBwYSWVzJdIPwkfpA6Er0MvdkWagOqVnfgmfO7GmWw1EtI5aYAp9M8Y&X-Amz-Signature=a8907a991969f2d175a39733ad256daf0dc1ea4f6b74d23b0400fca8fe740ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFSMC77%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T141033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAvRixSwPkHD4U%2FlVmefuJILpydOfR0wckH0OoxGNUxsAiEAprBc8Rz6WY%2FldhPNeqDJ4tr5xpL3DuvcN0kP4HqJQH8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYLR0mY%2B7a5lW7jPSrcAwQ%2FQLpzsrI8ZR5Jrt85igz88ic0zMiU2alJeQqBpfo94jDTRJf4r2sOsm5aRFTeEFU8%2BG7nwNpa7%2F7TK3Jqok4EVjNxMFWuFateoYjkyjZr%2B%2FVsKYjOSzG7kFwzlXIXlUazf%2BJBX8a4iBkQBV6n9yy%2F8gqkjKqce1r2pm1onuiN9jr4hfBjDJ1SJiG5pyOV3p26Mr9aw2RETeJpvahXjla7vPMSqZzpRjP9tVXq1D84s1rIbeacK%2F7aXOBuUzPyaaes5amlWOSN53JeV8O%2BC7aCWKyZCPxIjXWLwGtwFjSJ1cCLwt61HqVVaKVuLd1hrF98YS7IMoYnBqR%2BdlX637%2BxrQ1TWIWJU2bke003d7e%2BTsKte%2Bx6TVd8SyvIL4y%2FRifRGGOnQ16GVx%2FLT3lTlW7aG52BDOLrEnLyubWdl688M%2BeHcyjPqFeUqnZtofPjyvI1jE3FFwGamEUEq%2FYwKqnA%2FzGhvLJvGv%2FikfcYJ1GtJqWlik9tcRc8p98rouGy4MRxHskBFMvtph2O4HPzUtbpMNejFm3m3irxLfUhrnm8aoKIbxGjTIPAFJ0A7zv%2Fts2Q8XOZuST%2Fi83TFPxnLQ%2B2zuVbJunOEHS9AtOw4rZgJ9k2MuwgLtwwU2nYMJGjqr8GOqUBPsKUFop%2Fs9T0aheU0%2FevEmuAXhegU0pzkix0cMsCgx08N0z%2FK6BNijsG5%2BznMXUgGVnOk%2FeNgJSUzEbrn9v8RXaGYSh%2BYB3R0zDAL1B%2BEWfOpgYfxQ8wvfpCA60n78o%2FYq541GgEyX0Oq%2Bnb%2BZXozL0G577UK%2BeKhmhbfL%2F31JxxwvHfu67sZN0HYcNBgJdL0oLaogo7ieZ1lCEcJ8e2wcwpr9s1&X-Amz-Signature=a7eebcbea70219f066c6e124f794a9aa238ce35b79c1f3c1b792d1414eff320f&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQRQUEH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T141033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBkAvYwK%2Bs9UIwj1p2NdhZKixxUYcpguBAgSoqAzphAFAiBrgMwZ8lqULKxVcjJ20%2BAhJghDGgE9%2FJj5pqgbuEPsbSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4bNUTvgQjxWU5JKhKtwDRo%2FuxHI5tCKQeWg46WkL7N4Kkaz9mBBJz24w6YIoqn3B0pLGsDpZmYtjskll2ZckCjDHzzDqQNS%2BNQYjtPxwyzTpDJbU6CijRHFV55IfqhJzHILY2DeW6vegIVT800s0dCly4Ki%2FQXZgN8sO8gVhXa6TASpQFbva4Fx0o7PbJAJ%2FnSrPvn9lZ7lIHUdbxOHgU%2B5brYecanG1U6oNOcCmxkdhdLZnmrt6y6lDcFkgaILuN7s36V8H1Ex0FbA284YbDulkNyCR5ySLhxfx1q9bRZwPQtRPMZ41K4PiR%2BeLSRRigT6BVcZWomGwQ6zCdLHyG%2F1Jr9BtocCz7lY%2FUeGJC1IaXnJ6DOtv85nuw6Jmj1RJHN6wl0O2eVrTb%2BbCG9GfKffPkduww8u9O0bKL6dpDzh%2BRLyXuNYr46T8hJvaIIALXVb%2FcYy9FkvYDrxOEWK0Xcdx3p7O9Ez3cMigWix23FPqcYA%2FU3%2FLdJ3Jx7D%2FKm%2F8arhN49YKMdh%2F0kQNIXlccvyJHBCGzkHmOQef4ZqpHJNraF6ex8D5PTqBBQ4jnq8Ois8u%2F%2BP7WVdfHbvF9KueGr9qpbgJXNlr%2FiwQRKjKBmnI1Q3Kx6rjFLotNhrIjzGTDHyjc6%2B0gic4ltQwiKKqvwY6pgG754%2BAoziSnrQCFW%2BZOkORlRge0Peameem2Qk2XJ8UuZZ6VMi3DEXHqMdkqswFZ%2BLNSakynMvaBCtHY3SXwJXlvezk620fEL4TthheAW606w5eJ7S4SoKMWpfmOfgJlTtWzYLbcSs40J6sFXW5FDWSctn9ga%2BI2MAU6PvszD5vLJ5JHKG85cqGByeT8ngf%2FyDSGFEh0rmEwDIKcI3jzeE1rFfnC7yX&X-Amz-Signature=30a8f8d434b19966b52d24cfe406d98d37707e080d88bb5e80930e905f32a9f1&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4AR4YRO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T141033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIByTRynG4ylY1e3nRJosp%2FxHn49uIY6BAHtDCcxHUEdJAiAnn8qxdnubSrBIRMBcevhOkVz57VfJM1lazuvpn97lTiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZep6iwh8zc5YZysDKtwDNWtMXCK8ImvL%2BGqS2%2ButmKPzZ2nZOj9djRr3efwSgjL9ruPYKgO%2BBKMQKaILtjLTo5r%2FkZi9%2Fr4HtA4ezT1aK1WlwaY7ElnYe38Vx8E7mWR6T61ViwFvf4VAZJ71pcRI98vgtELyyQx3veXSFc9%2Fbn5CNz8sR4Gn4wtQmH8vmvpmNE3pwrOaGTX2hau9tdK%2F2WV3RoF2o0fvQqXIK96L8xh9FY%2B5qwIkajRlxDsru4S1rOWSZspjoEw8TLptbgOzD9bkDHnh%2BZTmnwVF2wCcc0%2FruNOANn0%2FUO2f%2F6Dz37VxQh4Cs5yazRgliKBVmnJSSA%2Fkq3IrPTq0JywIY8gUOR5Le1NLjx9%2FeudrVJmF63Xm0%2FY%2FAkKTninX9Ogp1%2FvKe2nFy%2BB3isZlYPFok16XnX5PI6cDTXbz47oPc6YNSSI2%2Bcoxf9f7H7BoBNCCwIoWHQS%2Fp6eY%2FSyPlDcakoRl6WuYDvo%2BousV7BPLomJ7Xrmf895VYI%2FeKU%2FBFKVI0eeV4p5kHtAyHsU0gvhFcrr8gISsCWkeYvSgmq2eh6JRGEd6b93tyWKfaon1DQHdpRHG2iqDJpFANLVTZFYlfeiPaLlEXlmhXulnvK7e%2BxtDyldiIPuFqY%2BrjA6AwH4woaKqvwY6pgGFm0%2B1ihcl5Mo42r8TEXJFK9HVpuWltQxHdVp1AmEM7yiMNdRspzJ4Qz3t%2Fqur%2B4DoyhuqIyGvmC0XGcUULc8C3lI%2B8L9x42d7LeLl00Vr0r9ZXacLpXc%2BQxINb8EvJmEJruwGjF4fAuiHL4c29NQkG7YzC5SGmqsOjkqQuIieBblfLNreRj%2FI%2FCl5rDNSBOW1QNdS6WvMl%2BZ9UUE%2BFu%2F3KEEpkeiP&X-Amz-Signature=72042cec9b331bc02ab9990a88b36e7d340c2de042c4bdce4be5512025593bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FWJ5YB%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T141038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD1y9rEmO9%2BTAZ8vbNd53ccSrm2h3uEwlpdeoOczKzZQQIgUfZ1EgCXvtWcyg8J8moKXaDRZbfvSpBKoig2QTBU%2B2cqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHP2DNpUuATpFushBSrcAxZsA01tfj0LkZ5zJQIVYJJlB2CbOAATJxsQwoEQ93I38s2AbWxje%2FQVf25XXAb%2B3DnjAnuHxwXyQdVdleoZX4oIr%2FoPn9Ejz1YzyZl9po020sy70dFsZbJaoSBMOGFsYi6WxwNaiZqMouj8E1HrID0cWHqIIuJ%2FA0z1eajblvDa5LIXD%2ByaQ882l4PFSPa6QsMAW5JiXPE%2BBm30H%2FKnz1CCUQftjEl6ubmYP5ArX4%2BTlMwFSS%2F88nk8JGgxV5hbYaeU3zc7dBnwHzrjt8xALyufyMAxSXvVWEWliVf8Px6K7ZOsnHnNMlKGtmU%2BhPlcjAsigwEEt2y3pPOy8ZLrRaSnWv5YtngtehMoxzunNDlS%2BBjK8Y%2BRMnsv1iuLMotkfM97D4PcXcMyNFJwFMt6lSxREm%2B63LQurGsPDYboHsF67vUPjRLdrZJIZ356gWCGfbrepfTqLdaLFeWzh%2FGPKfMdafAyzkaLnScHuoUYrFeQMKLbx%2B69wmmaPyO2OnV%2F%2FTwqBnmZglapslU%2F7YLGErGocVmV%2F4bQpE0B7sLSql1ariVavj3S%2FG1UEOGxo01BmS0BUigVNI2DysizggX0m98IZZw2qhR4abqZRFwpLq4DjalaSiNuYKicyYwiMN%2Biqr8GOqUBYbdM1fdv6wXNuakICOGgVfw%2FU4p42mcxE4zOf91NUsZYIIbEXcqlCgW453fxMwdzhSCPFcfWqBrA7mNqriLVPT7CVCuc7Uue4O0RuFoXy7gQTYjlVHjvnLLvpUKJOpaesK03YPFcU7l6Vnjcep7mozryiCfcnPohkV94v7yUGA%2BXElFQoA3POwkFW3VRvNnuCcSzewMc8RWSxnWFL4X602ANl6rF&X-Amz-Signature=c08c27059e30ff783e6dfba67f97bbf3415214e6bd79751287cc245303862412&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635ZNQE3U%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T141039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICzi%2BZ86DQfqhNtTVejr9Zd5pbfBnxqNyrcTGSv2oJDjAiEAj4Lu%2BuCQtrLSlWfr4hl1ToyvuE5Qz3R1mbjcs0ghIWQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdiTfmiV9sEaRkKGCrcA8Sg66eRE%2Bn9rF6YRKM2FfR4%2BJ7MsW7%2BNVnqBflh9L%2BEiJduDUyNvIDp5xqWWZirURnn3SvdrM6FqxJlRgNu2bbTcAZ93hA%2BfESAFmKbfOs0mdWef7Fj%2BopwRvMorCntrniXVbVwwueWhrT87izf0dUhU1Eda0JzukzQjh3rZvNb3%2ByJXGRcueRtgGVu15Kja9Sclx6%2FbMZOn0LJi1IaUsFH75SnFxJa83ereR5pKtuLgh6%2B5qaRXgoRslqqBk9PksS79%2FSS6l89gkEj9emKQw8omm2%2FN9amAMK0Z0yGr%2FvFHOlIl4Gfwrr8NzM%2BGBmqsbeB0q3g9oI4Sc%2FkWe5jJAm4dGKEH3z2EJw8pNYMtCtaNtAeXLW1tHZcSEc7DwF4OL4zlC5Xwo9C5evhcqDHHPqdQu47V7mhUSjDMJDQYX1XQfzaGmXGC%2BFi%2FHx2E6NpvaxFWjQnKaGmPfMNh5PT5KnfbpyAXdyCCUkbbUpxGJBhFxeraz2LsZzEssHGeP2wZZTSTdfIajqXHh2BKG716rp1Y7I4IDx8Cq%2Bt8XNKM%2FN5met%2F5NDMyKjcugIPQ256Lg73%2B6KSNuhOVq7L68%2F4YABNm%2FkczBVmnhRtUKgPeTOrOTa0e0aqN7Tepn%2FMMICjqr8GOqUB%2FUs8%2BUngk5lua6zNQthfMqxfySwOMKF%2FBVIxicJ6e8wgE8yzJ3Qox7pBKC578MOJO0c%2FvKfEmleDZum%2BouemP%2F%2BuPHTXpJTuHowfboDwvnwx4zcKAGM1l3CqwRIk%2ByPmulBQTLYn90HkwnHx2y7a4lNX1U33S0BtNtH54V%2FM%2FMv0UMt5BqvxzUrMkf%2FHkT1Kfd9dmeSEMPHG7F%2BsMuXBPSx2%2FXUb&X-Amz-Signature=db977d79afda50708aaa07e9b4e15300e8f1653ed4b33a6c88f100e35ede8c83&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

