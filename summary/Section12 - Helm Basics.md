# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSO2REI2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLtCguY0Ab29zdotsigR49ymOYPa5HZiZeEHff16dfuAiAqFNDlDUBiV36hw2e9A9exU1IA2Ty7KtozBZT%2Fdhdc%2Fir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbDp48ghYWho97Z%2FyKtwDtNBDbZUvxkdwA6maDtmneVzPqGSJzHSnRBz6KCnSjZZu%2BmoHMqDqpY0RPJB395RogXZD7c4B1GfSBJIDeT650fBHDIjKvxvPZh4phMF4aXLznNN81JCyTesfqBY%2FM6a3rV1Z1O0l%2BXtdDZe79lOIbfEJwmy002c1Gz9DZWhGvhE7HjL8JW2M%2FKtmhVzep2V5rJWBydUopf2FqbXq3%2Fm8Jfs6vlKy0I719RuJuNQCmeOdCtTLtREhT2Js1SZU1JcKCKsC8plUh4vqPwf%2Blr7kzkRmZA4oPvXiBPlUuzt7VcdaZOsywypmnMFRE0BQqJ5JV2NqGp%2BnMeHYxr7dQO2lfS59O0ComuZL2y%2ByuXISxs6Jvfou0Mzb0x9SoT48SmeGshOVTeKLeF3Xp%2Fx4TSPqodH68JMTzpIm0i155vBBRU%2BdQrMs8s33E8U%2FYtdaqc4fdlFppnuOdrV0Tk9%2Fyf3VnOz%2FpT2DJcCZpmTetYLlRbucyGg%2B%2F%2FJh%2BS6Sd63QVBaOjlRgh9vqQZov2CjRzP9nfyKo4TO6Z7GgZpUyjvw9Ig40qxNit%2FLCx0WI4E5BzRn3v%2FkNloinNXr%2Fu5T2BGwWLu%2FfDdU6aFYZ3S%2BLncj2CmT%2BD4lVKGR6AL%2BhOX0w%2B9javgY6pgHtSFrh4a%2FwXFeOopHWcyZ4QkEfAiZ0gBtwnh%2BTDbHUaTu7yq1X67bDu7BXabBvyQoioJlbO%2FDCl6nPVdsyuhHXL103vwHEzqr8rixKcGX3S503AVNtHLMMJfB5RNeddgDzOdcM9eeZgLMNNEo%2BR7NpulbsXC%2FiM4IRkptUQmLxe2ED074921lbM%2BUiLx5aw%2F0t3RUkS5zpmCAqtnrUe9mlD81QkR%2BY&X-Amz-Signature=a297d4419866a13ec87b0762eb4b8521ff68bb11fc34f84ee8c1be2134f61dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XJBRSAC%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHboR4goNz6j3ifYLU9%2F%2FaXg%2B4sHkWXjZP4NZAtKTcz%2BAiAA6Sdj2AnUBAawcEUDj6ORnPaDvXUSlE7TtLZH49cibSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMS1CyQVe13PUlF73gKtwDMgAPKx49cbGW%2F18qTAGCeePOorWzvySUQarh5zApSo6hq5rvILED7KGstTikc1jjHJGwR0KDLXK8h7V4zVmOMBq8VyWTo8W9zPv3djnVoREO7rDowpeTL%2FfLcW0izFBf5kGwM3IYUSA6uuei%2FQ%2FbSl3ZFD0IFSe4y9xn14fKrBfuX%2FJxvoWRLXaYcxR6%2FYywuzkIdo0XmeFIU7P21CH4Ls07c8Flm%2FiPe7zOFruvIBnyfPPgp5P6uFNhvIV%2Fi1svHUXU8P4jDsYWGKjl3cCxvA38e8TDXGTXksyzijNWR3%2BtWoEZfoOf6y5l0dHylhONWrs8VfhpuhK%2BkTftWWYVqzxsa3PEuPNcaYTsOVcUqq5HeLRTW7m0pN99SRF2OnmTXS%2B4e%2BTmwV69oNQORFQbLz28LJyDvX3EJZ0O1Dh6edCwulfAIB8a9tVRIpL96XbRQAf6S5Tx%2B6ue0wnArMCx80hyTW37ZyiSRaiZ%2FrmfvKiVJeZm9cYLKSqDXNnfwn%2FlFyYJGQbcqdcKxVoPsCBMQK3lZ4pIVNf7UQ6dCVQAok20oqvGrY3BQKzQwJ%2BOFN50EVxiZRYQRCqO8aLPT8tXv5TuhaGF%2Fo6AlKdMCkK62SFs8KpkS5exWyV1KecwqpbbvgY6pgGxVY%2B41M2IzxMtm9PFWhV4s60CNPSx4BTuICwX3Cdk%2FsVg37GIliQIGYkXZpCn33L2EYt%2B7dPWC0Nx1jZVlVIWint%2FthfkY%2BQj32LMsWAbtjNMtj5Y99W7Z1YfhKX8RK6yiJIspvoFx7oKAwZS8G0QYs6BOngYP%2BkTyQ4putBcALmwmDd6NlvIVtF5N1O4aY%2BMhG85fqWo7PoMaT8iv3X88iTWwatt&X-Amz-Signature=43b1fb55408f2d2594b7e0e2e4d1c64d18ea6f7a39b4c14257103be96bd523c1&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YNO4KO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4n%2B6wWY1vG1a%2FkQKE5DqEnEia2ca0qJeJUCRFpSstxAiAqi%2BvbdBn%2F%2FHInpTgtoDQpXFizl3573XjUnkkAF7VMzir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvr8lOd%2B%2FI4PAjf8LKtwDfmMGdKzUhG7jgqfObx4WsgjPrjqGzj8u8T%2FjhxkVUzMy80aNM%2FdJfJUOT%2BCWSqQiB%2BXMpHtpFP5Q%2FWe%2FoxfZq0R0D2nTOm7ozZk9JftwdNf35L0h9%2Bvx6Cz4Gx%2BtlECWvg7x6OgiSONfcLR%2B85z7ScRb9xlA68RrmaOD7AO15QRnEAYe%2FdT5UWo6w5LsQsBLOi%2FXVpgmY5e1j9i6zGESb1XyoQHbMBz%2Bje7LNQAAt%2F8AiOJ6J%2BA3Kso3HoIgF4eWIE%2BCkffcfNG3kn0BYTwR5BCi218SwsGfUEooDktpnY82lhUBkTYGeFNXPDw7KlUVmg6NtRShOsvoLOzhDc1hzTlQ5YLiUp%2BBB%2BhRsCi4EMznJefoK9EDguI%2F77Z%2FNjLLvCgh9QvTDZb6MahPhJ8G64aqwvg7pJr9qqcwY4pi3QGAWCYD%2Fy3ev9BcLTOWtXv%2FcTduAUTEAAqwv%2F6oPwPI%2FkZcUowBvW%2B037QK80z7%2BHlyTUIqpSknwBpZZB8ijwTukECGC%2FmHBNukfoWBw0PvvxdZdBrbngyoiwtJCTIgm2kKQ7NeVXvGbLwpIfWYwcH3g8av3Bb7rcg6wAkb%2FZzwPu56VG4jX9afI6WNDhqyLjYiXDFtDq4dXlYJbjIw3tjavgY6pgGdYr1xG7ty08YIzgdAJc6%2BdYzZHQgoJUMFekPQLnGgXjAYwzOfD6I%2Fwgh4%2B0JQZ5Q4zTXqr1YJHxpqZZssnmrRSAjDwwczWqHoE2dLK6AvxHE0%2Bhy6LGMU%2Ffoi5v5h8uo1HA4NRUQf%2Fn4xfp%2FRplan%2FwfYcn6rIka6TUk0FL8%2B6U26u6QTLlliN0lEDxUG8W8lV%2Fw30MeRkb0KOjcCJWArHGwE9osl&X-Amz-Signature=fe728ba30c9a857cd85ac8b44ea5d32c1a690f4c745ef698be2c143e5a474720&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7NO5ZVP%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3Yls72jFJtQ3vC6XTi5IXoDL%2BexDfNWmWODRYXDTsMAiEAsBrQJAVMwIPmlIZ4TTT8tmW8Pu45LBvBYCs8%2FctZFx0q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDGcaq7QxQBAxRIYjsCrcA%2BZjqH%2BuX4E%2BlcJxEz9CB7KOn6dXZnQe7mPgaBYjxDv2aFCUYsJ2cxDPjlE%2FQgri9ggmGEXaOJ5j%2F6YWxsI5VbxHP39f%2FUKELhn58sjBypa1cRZDEe3baSoy3N43Qh4CpiabJqQramWgpTA7cnsMj6TswUp%2BIUmPq%2B5Co%2Fq7SECAEBncfmzOgakl4w2baoD9YjgOP71TOYXxTJAqqu4pI%2Bs9ZiovWe26%2BdG68fqK87ZST%2BsRJuYLh3xXjHsV3u2JtWSiJbB2RSQGcOUr51bDXpVgwL1XtphWfjX%2BTldan1hd%2BjPsFFb2qR%2Bn%2BTgvIBsNlCUeYI4Hd62X%2BPH9OZpOEszs%2FlVEjfi03xvOK%2FM0DitaU8j%2Fh4n0X1pvcWse9OrL6%2FD9XmPi1nBQ8skbJItw%2BdF1fZ7K6Ru0xLXHjrvFUWgWzniS%2FsXcJO4HaPjFn6qZ6eNA%2FaYl%2BOj4Ia4CMn10NcMIzHcQ7SDcqDmIyyYaLEjcIRAsQKyjLDdaeusCbUte5HRSHlQlZEI7ufANByP32xwLnBSm85DarSy4PGipYNz%2F4hJRiacTKqqjYVLzG4PFpBRRMPnJCMVgMxaMl9I1vMg54uaF051HcwRtNvDLeIsEULTuao0G8XuXYFbIMJ7Y2r4GOqUBt%2FrASR1WPKLfTgYq%2BPBALqd%2FKo6gqHHehXXqZIFDpbIzbeEYaoSj6qZsJ0oFhUMzPYZ4G3JDJKrOsAmSx8V%2BvYpynynbw%2FQ1YoCwpDCIEExUkVLb2qM4JzYDwa200LGn6x8CGrwqwsJ3PGR62EFlmhZHlpYcyTfumtIK0kYZO0KPp7Yj5%2B7MnjR%2F9DwIcoslUSTjWnnMHNYVXbcyJZwD5JcrJydO&X-Amz-Signature=7df65f3bba620c2a242c0cf5694f755d9e1804ae1f5d82a68665b150c8463635&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4MIRL5R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMtCuJk9WKFAHxo8Iam6e93jSFtVXhT42NJ%2Bgxqt29QAiEA5Pdka%2F8vAmc9veQ1dO8OwTouBUOV2a%2B%2BJUaiiuLnS9oq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFMpcw7iQ%2B536w05XSrcAwUiJo6Hwito2fh8JBndbqGvaoJQzSUp4Ukk4RvaTTXxWdF%2BnYFKK8UQQ2Sq2IgjKVx%2F9gQDV0%2Fs1dbu6YcvCHwu8p4bxhjSZPPbsKceMzgJ2DZp7vvUx1Nghr4Illsc8TIr8pkv5NdWk%2FitWS%2F%2Bccwm9mCdBEC0nVHataIFt%2BaUv%2Bl3jJFVFNcLydjgw7%2Bm%2BW%2Fd4Dda9P6HTGUhAWshjd357Jk2p5JF5xLndpvcP7Mk%2FeXmJ7mHFHDYNCSwLQAmPrKXLhSBBAeQpCrAQiFwI%2BoC4UjCKu0j96ZobBbV8p%2Fb%2B%2FpXWEkxD7LneWZJIJKTpGYdcU6zAee%2BRjQUGk61enPjMwSpxU2ZatC%2FE4HLue%2BpWYfBoJInRYr6BrKwzRmvF%2BMfchhQgmU8%2FfihGsFNkBFw1Y7Vi7tcnbg%2BD63%2Bfi6I%2BMynWmReH9ygJ4SfCV1q9U0QaO0%2BFiRDIcsS91nDIDlZ%2F8lCDkU6xHJqJyU8jH%2BywxaWluQCS3d%2Be13jihYuEndEgj6hmHvMophOd1QyzZpFJiFI8hT%2F%2B4opyhFj%2FDMdhm9N2fWmij5WpoWbaaSRwbfHbv4dpG9XwIOZmzFdCi0fDY%2FmpSRDzVP6DUKNrB0zMVH7K1efdFi%2B%2BY6hMNHZ2r4GOqUBgY%2Fqi6qym4tZnOgvJOOGzXk2dUfK8EF24mpeeBrdfZD%2FEg6tmaEn1%2BSPMGFzehqsEP96Er%2Ff7eavWDvIIoHwu0HGfHq1MDhrFFWv0mYQqToyv%2FxWj02sWOFNKbY3ULGG9xMZEAh7b7qNrlJNEXID2dePqhghEV9L58Nft5sNG3Lu%2FJlKpBkIzFiIIJfA%2FgZrc1CP4sWs1N9Q%2FccFYoVklvgCV6wA&X-Amz-Signature=1fe8811e6b40973cf158d3d6abdf87117f296bc334141ab80c322fd55cfa3d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXMUNSDW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4pWYE8rpqQmBGe2O2%2F2olgw7%2FU1JDfexb69wbe6G3GwIhAOxwbLao%2B695W4somRpnPN90BUTZV5NL6QX7eO7VApeaKv8DCCwQABoMNjM3NDIzMTgzODA1IgzDA9x0TplwVcVunP8q3AOh6jQ%2Ba05uIZyY0Raq%2FGglL0h9IE3aYyEQ2M7rbHlngj1B%2FK46JpshmIG%2F%2FW7oclN%2B%2Bg%2FbJU9dNEfmXyxfqcnCLg9noY0XGubINQ9ZGRnDuOyYg%2B%2BBRYgvzOSLNTK2MKpvuzMCEkXfA2%2FEHdVo1wYwheOS%2B20jUF4M4ftFwIqgiwqyfLlx0JK7vjMNbKNXeu6ICb63COZUiX4zYINL2Er19MuQe9NYNXbnqzamuJpoIoDgb6T6kzJVKNy%2FyZvYtnkT3IiZ%2Fh6hmuhTY52Wg0%2BCi%2BYuP%2Fs8nMk%2FGEyqooyYAxt%2FwndbPuZLpDDgPl%2BxBo%2BQXi2tj281iLhmCRqllKs2by36h2eBnyd788ojL%2FBT%2F0F%2FgFqnIdiu78JGyrQnAUN1mwG3dz3MBwLiW90LZPF5Vs8BcJMqUpLZFPabgCAGXYQ9sMa6Q8Ag5K5W%2F1o0p9SSTlfMjBATPBHhGcUqh50DLUgPWRMidFyIBACXU9eq9%2FBwsygoIQxXolAKX2xS03BS7dOGciRKEJe0S2bRdfAIwab7laKPcdfdC8UMF0Q2qlfaVSxlAZMow7O96IWV5vvr2yEDWxkWP5T1IxiJdvmKNMPoRSupxUBz4WV6vGnb9fSakzeymYN9i6bw9TCD2tq%2BBjqkAXiPmmIsXHjrT9c8FlSqg71DDrV1FOh15IIXb7yKqbSXHmKduAIo4S8FUCdzNzs9kvYp3gzs2noiQ9Sq5QLBYViXKea6KYCXYCjsfpeD%2FSBztLayze9Df4Ppht1j61Y0kikJZ6OeJuSeRvJZUoo7tuqpFhRkYLgAxLqtOf5y072HqkcXCusrinzpv18lTWovPT3K3CFdLU74Ee17gCkZvq5GJ7bN&X-Amz-Signature=0accdb7ee548b65f92b5e7a83ce2b78017bd13ff90f4b6b968fe2717437007d3&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2FD4ML%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpgWGU8UsZ4saFM7ngxBuvV2hPRdVE5zZ%2Bh%2FCMRSF0jQIhAJuh19KnEwolPK%2Bb3hn3mWJvWkUuSdDDTy8FV7WP4lo8Kv8DCCwQABoMNjM3NDIzMTgzODA1Igz1JlEZrqaHunEkESYq3AMGhLjG5%2BEYU4FP6t8cyZNpW4NsImot2VBelJJunNzW32qNz8VIvny141CU7ArrCQYeLNjFzqyZdc3b76VKR0Tih%2F4dMyJ3Or8d5epVsE9vnUaDJE1h4qoFmVYqzylO4le5ZzSJHsAo37Ycs3y7%2BOBi2y1R5Q9Y8G8j53uMFguIVdNFLQavmBRSuNWlGv573n%2Bi3H2bWtisV%2F%2BOXa%2BPrYpynC4SSRLFsF6Llmfk2Lpn6ydGvHEbEGupXrJFda6yksMRDLHviGgYl2c385ZrOsMujqGiLJDB3jyYp6QX5MYtnXXOUgdVQhbELsokUlqlenHbUlWEv47M8GqdyIPJCDoi3ML%2FzDMIcGLoFqwJpaKW00lwXV3ryXGwnmPLT1bod%2FnfRIlpBM0mDHy7JaV2vv4BtV5qve9Frls1t2RXVXv0WN5fC5ZKv87%2B4nuDIrH47vWSJ4NUQTgi%2FCmpvVJWd30C7nNw77Ly68Fc2RLSW4OuLPHBS1AH2XcxyzFDIcWJQpghzQWtcKvSoPlonEG%2BHr67a6DM%2Fe6aTBAsh%2FHkadO%2BWtYxu2Vwbtg9GFD%2F%2F%2BGOPLGIYLMLtrk%2FcDPYNN6uCeu8BntLKOGwFzFIa8bk9ErB4InfCUjbIYmHVYTMdjCr2Nq%2BBjqkAZGJOCARn8XD71pBqCKzT%2F6dQuAkNTsqvwaUJTloH01DQ6EtP8ZFc97poQ1dn7e1NELRT9EWLEoo4XKCmvP2UNYBvdnputo7nUVhpOcKb1lZRu3pIFtf%2BIZeSxYDM1mIye2ODU4FZDdDkYtbphfy4FDTuf9U5k3i3t%2FqZQeDC04o2Q%2B5lbvZJB0qMGbnFK7fM%2F2nqvhJqZyyIkZLbCogn2Rz6BnH&X-Amz-Signature=8a062e0be965fa4c34e3ba0df22025718fe86cbe37dfa0f1ba978eed20e24cca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB6YNLAU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDarEz%2FrdjAD9mftxe6jQqqS%2Bdi98k3W3pVDDydSc%2FkkgIgQ3VUOfGgoCN%2BszxRC69P10gbMm2g3rL8jeMvtyUsWoYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPt4boI%2FqmiVLcgBwyrcA%2BV6m%2F1VqFvWuwHVgjel00B1GzzSKilz7WRAqMszGiSgXlZZ8j5jxWmQwpbl%2BTsSZ68YxhXhdoV8o0MIDXkhPlnFwYzuKA%2FddNb8sq0CGn9YkRQIuPj86nd%2F87igwhO7bexTBvCU2MTOxG9AonWVjh1%2FF5iWEq2eM3z4jLa8BPdj1GylsbLHNmiMs6b0ika9FELnL6MiHRMqTCQXCM5q8SCKYCW4400d0Tb8zdXSoJsX71g73Q7ZmkyMZNY3mDXSRX4NeFUveG6q1HhlqbaFbMcWvD6sMuZhiafVRw4Hf0%2FL9rEYvj1aG%2BoKa6%2FfsSzfIr4J3t5lYOLZNtXbGMYtwP0i%2B5Y7g4bGBDxdxa%2FrZ8ISxOGF4FssIoArFcm9K%2Fp7XeckHYz8G%2F5J04Iv2f8uF7y83X41unSAcJddlVe%2BVAT7Zqk3orjtrwpnaMhF03sB%2FIt%2FvDd9Un%2B%2B64FG7VVn7fIkei%2FvYbGhIsTNQhxP1y0QXfgi0vk4rrjZvk%2B7sXEu3GrVV0iS%2BoYeQliqvZkSQuWUI2tKcYDmzxBNSXaJhv0c8N4%2Bg%2FcKIWJy2uOJBJ5lCgDYxsp3PK9rDQ89Wh%2FyEw9YIhO%2BXPzGfVg7PkS94U1OPo3MGJ9Zhm0Zqd6%2FMIHZ2r4GOqUB4Q2W%2F6dzBOYS4fg%2B1wncBEdWFY%2Fy47erIzoEgGi4qt50n44U1aJJaPKofToQUJOxiycCGS4cx%2BA3nDe98ZxIjwuhCd7qMS%2BsE6yFMte%2FJ6vfnz0QOzwv725s1uz9cQStbjTqyOj8VIBjgLVSMzffEXJq5%2FDtfKoz70gXL%2BfJw7bd8UWBsg1A97bEUdZnSne4%2Bh6lnvpswRhUi8eU%2FNueR8i69IOi&X-Amz-Signature=dc0078882132054b5421df894f5c8f0cadcf398f88593cd021555a4c127065e5&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPUV53NR%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1oUp%2B1JL8NXqY1e%2Fz69jZQDx1EuIR3GeWmf%2BnFjSMCAiEAnqvmncvp9MU10bjCDNEuwgBqgN6HSh816L25rvayyNQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPRGUgcZPTaJjYOt4CrcAyiIBkQ%2BbwEcyWYlQPUAsSq8%2F3XSP%2FGZfJLXGLSiKsNm%2Bu1b3i5QlWUxmnQkC4TE7vz%2BpWiHmJvL9BKPVNv3zbImqs574Mva3cpTzADkaxKz4p%2FiZWmbGbX6BAV1uWabDFljwzEBR7ua2GFOoFOC%2FF%2Fhc3aaZlV1eZOP%2BhxO8EwaVuCK4mTirvyokERauq6QxWrIeb%2FphcINcD7UcB1aRXNBy0qznqwoDYFPdw%2BfD6%2F0Igwt6w0A8agXOJHxMv341RuFw9y%2Bwaaj5t2BHOmK401bzbVUpDUzlN%2B%2Fa21qvSzZWSi4PNuH28JmS9KzTLFjtGotDpjEoLX4LyrnHnlj4kgz1CxU8HWI7G1fqkaest3CFlKEJM%2BfWYAa%2F%2BKE6jf2aPPkJ7LL1v%2FVOWQAs%2B1pw5jIrBkhovM5kgS2wnQPJQZ6FQ4BI%2FX9qL3OoVG96xyiuBuTUwO4OKbakPYrGvNQaPkOV%2BW%2BOHNXDSMMLLZNKvWPf130aYto8gJcQszmW4Vg9Ob3Z2fvKmoUIXiA6Y%2BOBSjz1VTYfLGEXmOA8iplAphuEBhQZjzZUqEnhfvYIW6z5m8%2B6lK47bPbNf6dBzaVxWIVrA8lyZmyu7xZtXrOajzW7oy57CF2x5fxd%2BOYMLjY2r4GOqUBUqa2SAsj2ElRGnXWwhhymG0%2FUF6K7kmYDSFZe7cT3F3yhyzWd6gryLYd74FfZtQmOo2d3wLh7zrDftZBcTLdS3GaZ3e6qkqE8tMESP%2FEvqCYez%2BrbJrT68hgYDTWXFqFeIY%2BACacscFVYNxpGwtHrJPtE6TkFkP7WboKAXB2t8W60BktUKiH0uyjcwsbkkRP%2BCtZrkyowbjka0aHfM5BpCObJl8C&X-Amz-Signature=0ef89955abe94985c52a436c26fa16d35b515842f15ecc11f194fce87cfc16cd&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

