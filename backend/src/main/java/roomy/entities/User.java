package roomy.entities;

import jakarta.persistence.*;
import roomy.constants.Role;

@Entity
@Table(name = "user")
public class User {
    @Id @GeneratedValue private long id;

    @Column(unique = true) private String email;

    @Column(unique = true) private String username;

    private String password;

    private boolean isVerified;

    @Enumerated(EnumType.STRING)
    private Role role = Role.USER;
}
