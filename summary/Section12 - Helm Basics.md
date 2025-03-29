# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T22NREUM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDSgWJB0KExk2udF84gnllsytYFr6sLu4sY9LL6O6lXqwIgUC8otS5QjarABeCj1xlrrbi6sWz6ik9n4tZ1YB%2BynFMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIAdWHirzW%2BOjX2ObSrcA7DGbZETdjy5taFBxxMbOwuvpPioFwSfc1L%2BcJ4piZHvJhLz6eA4AbG5aaaiiWI2FJQYIB%2FhMvWeB206qwndrI6ZDDcHMve3884X7nLTtNw4GN2kipu6CXgSw%2BHsChu%2BtM6UXR9t%2FXx85xSdWEfd2SzLhiXRm6tz%2B3oyOc%2FUH0cE0jZurBxIUmFdp%2Fu4RWK%2B8li7%2B1C72ZQLmiTpOhSuZKMFiT9gJjkuA%2BIQbDFI89DPADNLAyK3JYniadZBGsWi36DyguhhRq7Q3Bzc4o0tGWUBowXVHAUEd283sGCpClZa9q0%2F%2Fql12EI%2BjYdlseVAHoZ9rDajx2xyLmk23Kfq85g53PlBGZh525oRImBPmes2NdCU5VHSTxdO3i7MXG8vkpP6q%2Fq0gKYPne49wOCWApcpyJVZT7eC7no1Rz8XbZ4xD990Vu3mEY0OUbYXOvAmWVDTtG5kWVi0MRzsWlw8WPsLHCWVu05RhcLMGCcZ%2F6RwtFjxeFAJo%2BATyPVTYifpPXhLKKZS9Cj%2BAxbxCtw54%2FXrFl00uRLxcnNqwA2znUH02nv5B9Lpdguv2Qnj7cDIA8F1MjvK3aXSDSUMlU8lSKa893%2BW%2BBsGh8F8G3HJQ52HT7QI8osyFXqO1H8QMPW0n78GOqUB2cQFbnB4qcc5YiHy8VXA6TN1XPxaLJkNiW6dsnyVS5mdrxSFdxtJeuGYkKw8EnEgjLxrBoWuKUVDqnb5XFAf4rY%2FfAgozSuFdx0MwHx3vbL2dsFrnjmEmUVlarzfjmTTGj%2BGCxbAfilfi1dekJBmGddcnC2IBrnjchj0fMBQtuesPiCpdsA%2BKW6lLvnMG2xohTxniRUY6UkoNXoKsIcZMETaoEbw&X-Amz-Signature=5d21aabe4ef1a86cde58331b26d437d6e0c6ae1d2de11420f9f285b700106043&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH2EOTS5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAETUotM4ziJF4TcT5k1Rd79OoWAWw1BK0PCuCHmVjlWAiBo98%2FTQtvykCW4WP7HjHost0De8qm9pnq0TNDH6WPIuyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMaTo5fqvkeQmU%2BvnbKtwDfMeGht4drCq%2FUwVUv3tJ82IjjVBDiehQani7dLYBFdB8P30Uul3rG%2F3pNSHRdd%2FICvexs9uVuNZ%2FTBw%2FbxnkXZmdK2hI3sBsN6KnkeLcFoza%2BHaS1DOYDJHyJ9zfK%2FVH6p8vmNdL5gZbcA9r5%2F%2Fcq2jbKx6Elk4lVRT4xL6fBN6L0HHakVlvXEiRB4%2FU%2BAtS7sHnjfoLg9T%2BDsArqs5dOf5gt0TG5np4vxOCDXOdzgPHcRUc%2BuhO8Nk2%2BQJReLJMme0dzOXqPPg089BxMMnsz4VCAbMXsC4aOsLGJdWTWKauQMgmRkDk2Y6SInDJfEC8AxRhvx9GVHoWcGGl%2FDB692PQGJcwVDP9mjZAjmsxOumbnXfVdkopYf5WxZyxp%2BHTRP4zeKrUvvREqIjod%2B91Me5InRChbTQ41aaiNj1xf2%2FLxS42JacoiQehrJECZbn74wBU55iwbW2UMwDW82jW%2Byk9eJ0xlRnNCh966csvKyKRr3AtlsWP95yTSZ%2B5ZKOECHINliC54VJL%2BOW3M6TMv71uFKVUr7thZ831pGYXfjbdo%2B8Orno6QxgRiNrZquJEanrFDJD5fp8DsX7ccp%2BwDR9mETSuXUaackl5jOYSf1nS08dsLyLsSIvtZBYwl7WfvwY6pgFaRNQnEHUaumlCbD6XQU6n9aW9cAaMadvqqHEgspXd8u31WpqjRMMWDkTKKZtFP3AN2S1m0fNnlnj5sqRSjXEfSfg61S141EP1fgFi4e0VRkBPK0Wj5yGMDWp1NIE0Fz267K0j%2FRlR6GeO9NZ5dfwgYqxDkBzE2HGYTDkKw3p3S40P29hE8c6DgHe%2F%2FFiIiWXPArTLXdbFcIVRi2XQ79DuEQCyQrXQ&X-Amz-Signature=c6aa0949b3518822cb2cb6db3bc796f7c9152adf3fba630c6039255f2185ed1e&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZL3IXT5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIHs3Yz1cPvNqWjlPqVTeSTr0aDSHszfV%2FnLi1VIxmN%2BYAiEAhkDDzXJ0hvURdUOO%2FbxhMb3f1sz3A0RJbaG2gNIJiRMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPhM9IFDesUQlar07ircA%2BSEnobS45%2Bk%2Fy%2FBy1sXG4cR%2BKjRShPy9Hgu%2B1zOmbpSIucag7GoW2XKQ9AifmEW4qJDKOZH1LwiOaXfls%2FRqV0kKNj0DybC9MbUnUrHJaVo1qvFpeTEelUpzQrs%2FxNsckuhLs6drXz06RIdRpIGi8tqtKHwgC9Jlov8IviyOkWoxGVbP2zVRuX91yMr32xYHQz9tL8yV7R4c69aOpvj4xD9CexFHShm0Bb4U35vTBVxuFpILl9B72qmMERuB2keXxbmB9g%2FUoLsB1rf%2F9rJKsY9vkl%2BXxibbOjduQzhpKghBiwdBUP6gmjhS%2B25GCJHsnWnRApnkFrEKoz9W%2B29S6olCqhORxK2LvkZW%2FfnTWbfx%2BKEBDeFgg0M%2Fd%2B9yCEEi3OHVghNdf4CGoMohN69Ukn%2BnzbdSWQ6%2F4FGt8PsuSLgZjHTDTNAlshzJG9XavnSQ7B73tKZHzv%2FKbH6cBCMDqFyFgbW0aI8k0xLuWWyjGt0t4eOuvxLfYeH5rJs4f4g4bP4Scm%2BV6SuB5ljWhW%2B7pny%2F732uBHexDQTV8mkQaBTiyqN3T9hnGLsdAczK%2FtcvclTxBXWI2%2BliSFIrtD7fq0Ntybk8ux2V7ppjCcCvKeNsDZXLlDFWU%2FzpMEkMJW1n78GOqUBZ%2BExDEIsliqBpKiznsfDAwIaedQtzLc4jyKQCxPzOYc%2BEvebgfzLKpgQ7Mcrhuv2T1wZRogw1R0ZlPpEC9TuT%2BxdbKOHpHXGr0p1fw5Dl3VxOnnDeBsDI0WQ0XLUS0f51ikGCm5D0DQNkt9w7cnoKCY7XUIk%2Bhc0hnL%2BgCcrcJds4xTqu9ouuJMa3oDmHInKb6vvatbQhIMoxQegi6tkJ3CjvHYN&X-Amz-Signature=e65154b0bbf455ae2de3b7c2b8663779b8157a747ad31c5b3faedbc30dba9092&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X57X6MB4%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD%2BBVngoYQ18xfhIJ4juFsr97Z93zwwgpFsgozfvek%2B4QIgbAB6jUqXwN7hqgL9fmGfvilEZHaQjjV87DJifIeJBVAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJy6Z6YHvQ2mDMefdyrcA1Qp4bA6ivy4VfRtpafnS%2BLvpKZ3BcQXIgeKIbTJv%2B%2FoAUJXJvKs4wtZthaFXgG0oRbrk8CqNHHBopmMZpZhIynM%2Br8e39HxpHKlLuWFT560eKQ1VYhtoT41I3BKpiImFr2nU%2Fr66TVd4OiCo8sUVi%2B0%2FB4Fr5wDMnpzxwncYxKAViTydO2CLTQDbfjlYmiGIDjK7YOIWBJGLNda9MO0oz3w7MRaGIEpwwtjoVQZjn9kVz6dz4lgRat6G5yBX%2BUq1JSZ%2BKVdEC1TQyBbovyNYdRN4TRq9ESDPhs5j4RpVAsKUVg3oOIpRW87WEy6VceDxsCbw5WDzT5oMR2Oe%2BvPOEhnhyq26qlv7o%2BuvePVXgy41tZ3Xcm9mOhluzY2sdjm9Qvs7aKFV6uWMlL1JEBSuF%2FN9ksp7xI%2Be%2FPwa9eAyQ%2FOu23CxvEz2HEtZ8FqAbf3sZl6x1hNhECK3gU9aOvNsGJ0KGLBagbn5CgXhg6gI7v9NnEqqHw8d%2FNWX9TGH3dKjT4Oae2ZyDUay6SjiivzGEW%2F6yIfzDu2tcrWgCXn1umPvDmdHy9ffO%2BGfopbT50JXJlvj1noHVLamIg2CwOdMfVvt6YoGKg80nqgkaAA9vV7%2B8U3EmANZU0V6If2MIC1n78GOqUBpj48Q0melTdvUmG9jDet2h8kxwcaYZICT2lKz%2F3%2Fjazlg%2B7aKrILYugNzLp3%2FKHh0WAMLsB7ubNVst5wILSiRaeCouKnnP4gzu5Jg1JycDF5YP5PFZ%2Fy4ucCYFBcNHpYuZLYrpEEfFj6gUyIiOWIWdsRKFwuETzr0Rc0ktDxgtzHlEX9beFjDmhzt3XAaGpmuqBgPXnmUkCRcihM04HCU1BftuuF&X-Amz-Signature=d61a58d13ed0d95ad5aed8afaf40312ce2e4da3948c35b534713336ddf688617&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z75N37TJ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIHYw6URcPDhfk8UAcYu6kqyP%2FQ6JhYBercvG5eifnFbmAiEAyvGs36cUvDpnDxxhetRp%2FooyWolVojT8K1cQKY%2F9Jjoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDF2NYgUM7rFYNPCtWyrcA%2BnBvJBwDATdQ9VCAWkamD7i5ZfBqLnnZurFEbHs5a%2FEy564k7TPrFPfYF0tPvoMbGIY%2BXAID7GapxsOa8YpXsz1oUv3jJvBZmeKagBiOHI1qZG72WRs3mjkYbWTHHDefAAvEmkypSmAVwtvf9bi2pUxE5ilbXroFnPlEAsEs60fjv3y7SSmZvDHd%2BgzDZ5mQfbQC6F0vPTk%2Ba9p4TEZPoyr6Tdn2ba6wRu%2Bsk%2F4wMAOSi%2BmonRG512Dz%2Bph1HfuOkz3fMjpp89xaxldamoociLIdAJwJFwY5WWnKKq%2BQGALSYt7ZyHA6Sak74SdWDFfCIcnSj77t5bcJJWuOdfbalFQGvZ%2B22WJtJMDHdKdHZP3USidkpZTaCFhOWjquaP3BJ7iKmGNZaeExZH6cyr1b4rWsx2AmjLyVigmkmH%2FF2F7zE2ML0YhrwZ79DiH4N%2F4yRJCZLODQw2JNymNJiBBxteNnxDs40eOCunACJRuB4UXx1dt2zt3R5u1bGQrqHArsRCWQpinNEPXU0SjB7Pmn1kVknrb80eG4pImcDKnnpYIYgBKBiIYZ7OuWXSZaKYZcsQ2hCM9Lk081UeWMDflYfsXBGLua2pZ3q5rl2tXYe2jjT5cyZSq1SH4lp2UML61n78GOqUBCLidz43a4KYiyFgEDylElT4P6Jz6CkAm6IDi58YFPX1M1RgZn71e9V4s%2FtJ7oNVdd49t0uCCCPhpawLUcgHFQt2oUyYulvzoFxMaVVSlA%2Fkvp%2FUgvu5zSYVSTBXwsuC0lk2V5wZbSst3%2F9HnIYYzrZ0g0l46A90pl573ZvZOAZeBMniX6trpBt4VpwVxAWlJpWIht8rEpyX9eoWVmd%2BgGxiGLJYL&X-Amz-Signature=29eeb37796891b1d0a0f05ba80b03becc985c2dedfd537609bd8120046888d74&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWXFL3TI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDSH%2F0Yrs95B9LRQjS4XegIPjHWg%2BUBlFh6G1EJw7F%2BXAiEAyUSoiwPBaqpadQpClnKhEGG5BdJhk946874Mdrrtatkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDE320jfuku%2BUIUIxDSrcA92ASsLCUa82R79ACZlbhUl9PZo1UBP%2BSqg0OC5PxWA2K4k1FZplkjuYEdCWo58QV%2FG8WewTFn8nk7c1MoCCvQWUEm5KRx9tDPaPRjpuTOA0hl1aOwc80MrjStRcRx5pQsmcqql2TDNvbd2Qh8UG7XCKaZWsqo84qA5uxoeLsHoyBRPX87mfK%2BnUTfnolo%2FhN95VB0CWizN9Hd4LzOt3tesyojtKD1JG%2F1zgTUVnI0DjwuDklj1SFXXb%2Fgz6n%2B90Ev1MjroIlgCmgn7J06XH%2F9egW9t8UxIU9RnvDdoD1y2rb%2FUiy%2FwliawjTxdsevmUU13s%2F6D1wRIb3aycd65Co10OVPmSqcTXWG1Kx0FtfljEPzDs46wsHfr0orEpw0NLj9FnE7OHjTNr7MDNMnR%2FmCl91OsULG8Qjgd938v8ShPoQPDJr%2FKev0qx09SZhPdcid0zazkOThTgroxyh2LFdm6F8c5PGGi%2Fzy%2FltrPjOWjEWBh21HCPOQmUIT0azWYbOIW8v1m%2BrtWhtY7OHqS2gdl3EdGljcx0zIk9jOcrOc5By24HkHxG31XBjcJ1T2JghIuHFCWTKjZBXUQSH1Ti9G%2F4BgQPJmDkUiBWShLEHGDw%2F9B7XHdjv4p7wn2%2BMJ21n78GOqUB9RE6mkOHM2zyg0E7u7zwituVUKXkkmXbft%2Flkkp8voooKiwq%2BsNkTBaeGZ5IFwy2q7W1%2FQuWRr1o5%2BKtNte8Yk8w0jwYjJQ7G9oIb1z1n0P04cAOyjbWEXiIPVmTBFdb0XMVv6ScBjsGASYcuj4UnqBv0%2BEN0HozvLqQ4DFhNIXK%2BRwaLYnjIK00eqOS%2FXUOrvoNNysR2t8I1c%2B1Fv2%2BoQEJZJkv&X-Amz-Signature=3745c0027f87ef9069fb9fece4227b36cbf7636ef5cce13798b850b422f49272&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVB6ABTD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCJme6q1JDqij3E6hQZQPMRqeAarUP1eYAV%2BMC0nQ%2BUBQIgIs%2FGMnyWyEVV%2BCySdD9D9sUD64WZ1RJXol772jl75k4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMFk6EhkMtalsOBfkCrcA3nWpxYDGwAxtQCJqPrt7Gt8g%2B18rd%2Bz%2F3UOZD%2B67%2BulUIq7uyaAtb58T9UjX5fTPtKmbM36vBS%2Fz4TrrgseM12DShFs22Mfo%2FBaTvChk3B84wyWA5OSwAUhJ%2Fe%2BYSjiA0H1jENAUActJ8b0ymZWaLxjDRi%2BrTFzsRwmhr0ooIF%2BmVyCPpsJPYJsNrvNPn2ILUe66nbdYp4fmSxqe9%2Fnfy5VOAsqVnrq0%2BR0hG3oWb8hJ2Ldh9G4q5w83%2FF%2BDm51uU5cXewoMaBzWRtowBhiCbJn9y4g9QJGdyj27T5oFsV4txkoshdxvkXMN6VQjvlTdhVjgDf8CI66HzKC9IMp52ViFq3lzo92RknMExFFfz1t8USc5WAqm7q1osgUDIZlsPsSqW3S3osj5vXFpmxzw03qeRdL%2BBxcSIj1DGg%2Bu065oSmzdsjdawcxZcEd%2BZPgKhEeGp4677bnGTU0AtdhmVh6Y5eYDzVLSRJa5fERyUeK%2BuvNdiYXay7JFh%2BQu8ZTI40PsOcR3%2Bhnkvm00k7xzdyB0CMuPnNezHTsnU%2FUQm2jTS88RU%2FAm4GnWx0lVM7pMUhx4CKj38Hi03RvbCxhGxQczmiamXxON%2FGEsAEfEzTPF1P8aNSpJmpCB6ENMI21n78GOqUBvZSlBFbPECq1Hx8tLqWQKG5mhs9MHKgBFizDsB03VTiMRRhsoI0br2F%2Fn1OjL4XZU8FvIyXWdpHTdjsJ%2FGedlMj%2BpoSdigeYqpbixVRnaRTw0qFraFp5TaFkXgzPjOs%2BRe5gLafN1zEBh7arTEKtcbpAG1BUxlXmcvZZK4ip7p454hb8wUaKKnnl5QyvIXyUQHSStPYS%2FNjszAkp5B4MwjlQVmpL&X-Amz-Signature=1927344e411031ffd6735170701ca6b0e1ddad61318a68c58d0718e7e32ce6ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7PD7BTR%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCz68Gb4QUCU89EaLdGxslLNv9Ptv3eWAX4SwdtgN7SwwIhAMcyU4lO3cXiBGbziOzRmdW8Rs5%2FKJ0ut3osXu5U8bNnKv8DCHUQABoMNjM3NDIzMTgzODA1Igzr9BNyuZ0Qza18EKoq3AOojkvlbbR%2BqedKDZ%2FW6ouvJHWxn42PsEAQXSy8MHUWmoph9KoJ%2FsPJyO4X6vIlf%2B3QfX%2BjKjMLdFY%2BRQoPzSvE2OAsAob%2B9URdy%2B%2BCbNJS5SpowDvMCxvh7gnvrf2Y%2BMe0uxNeD7%2BTedV2Ux5OiV%2FMcavibENMJlp0syUgnzBbysNYTFoE6VgN5RKIHPZhqDLB53sV1E%2FsuBOw5I6DIEAZNUEj%2FVz4HPU%2BFEUBMoRtOtAGly%2BZRaLnfWZeBUAb2WeTG2mBmIAAnN4Y79J5uUb6dxxHOiBZMEKoKMwRLj4IwGmEZJ7JQXaf1lg%2B0Ne1I2MqKXa%2BPZEMVqZQe%2BaSRZKafFjngLEDp7Vw6WvltpN%2F7Z2ImBtyR3vyxofrFzuVLMJIWQQop4ZZlYjB2V8tw5rhqJblYGWwoFyDL4qeDjI6TWfFcOMinjaiS6eTMZ04AC%2BJyC%2B2UBxuvg5oCN86b4VuVBjbI%2B74m9ow6CzWlBOj%2FHogBXj1yz6JfFkD7VB8kKsDf3LYknQ65xV%2B3W%2F%2BnktEA5jNh1K%2BL4A7OVAwYAeqUH4nlkffhU8oimtWaYW0hFX97ViEr7e1f6SVBfbvoK1ogIzPn%2B0Zq98iN3%2FXywDnksA0010gOyLcsb5VnzCXtZ%2B%2FBjqkAT%2FDuDF6QkSjjg3gaSXv6FV7fdWRLjnsA%2FrzMxQs8mNHFDlL46kPJY03zFlvzJYZCeRvZhcgj9iu27qn4jQvKrM8C49tptqvoLDM0LSb%2BlDXIMQNfh%2Bo5Jc3ebL5QdP98SHbqDcMwKXlNcd6Zcd%2BnCYBFt24KOKBLTkqkLN1RqHtm4STOEVYd88O3aJ3I5szPMiQKAIZgkQLV76yMVLSJTfR0iqU&X-Amz-Signature=c673e69558f6d53890a7ac5006b49572a4ed2660f8bb1a0c7b39ae25d01f2a97&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NRUJS32%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCQGER8N3EFY3%2FlpWKT38abUKVgBgiTB9%2BGWuRIjJ%2BH9QIgKxdkHyYGumVwj%2F06waEM2Yqa1HzlFDN%2BZfT%2BIb6xQgIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEA%2FvARFj%2FE5Nk5sKyrcAy2ckPTjRKQazRGWzgCGmWj8EBOlbPQnKJYg1eCmV%2BCulGHVuV6DdA3kcLjzXqWpcTsisbDkEnJgb953AihcXEJ9n3YttoVt75lSCGXXMxpzxckdtwmd1yKaJUI0APMTbesbeldUFtGK1M%2Fr6Nng1k3Da3IwrMM6GCRbDp%2BM6cjh%2Byd27QurMGN0l%2F7O9ORW9ASotauUYnVkKqxs4mHwbveJBUBhzGah3eSAj9J7W95C9j7d5FqqWx4w%2BSVr1RZzXn6T7a6wIoLSCRUzfKp2TT%2BX%2BLZLaFVI7P4EkaqHMExxdNRkrcKhaYclHEpeXBxl8o0YcRZAf3aAarnad%2FWin7HlEn8B0HN%2Bw22kXDj9eD6d%2F5e25Jycy4gzjUTlcBUK7BfxXVKWHEVbTRaW8UO4OJhe%2FsHBQhUuBpOVDk0WvjpOANeFy9UIo3Nxv9UmWKs23QId%2BDDgeqP5kfPRO0NWaUypmO3m%2BlqnqxRUOyVM0dvD1TxtNl85h1Gi9%2FpbHhj22gF74LbUOmoux%2FjnmTas92WkKWLRzs7vTcbwjJ%2BExV2xnGJIrlz5tkMiMjuv%2B5incFfw%2FDSzFU9xmQk89k4rE0iXIR8ZWoL1M9mA0mLOC12EBk7H9HIsXsF%2BlkAbMJe1n78GOqUB5QCMsLJvdKH8LHdCdSZCmhAkfniielnWjJlaq2NoudH7lNDJRP1vCaZzib5UkQtgeLCLAUnhHFqJ1tJEPAW9GZNPW8gooCQ3plttxTWxXc2wKXLxK73Qom0MjgRfdPyrWE5LXmliTjXvq2cPsL3ma%2FpNQ0rj0hrz7dvqzGEVc%2Ft9xJw2VlhGL8ulbun1F%2BQ18QCwfInRX7LQ7EJYZ5nXkH6yRUKx&X-Amz-Signature=cfd3164e1503972e7cd857dd303ace34ba5681febc6a76463dff5e71309c46a9&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

